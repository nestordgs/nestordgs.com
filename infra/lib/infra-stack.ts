import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { DnsValidatedCertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { AllowedMethods, CachePolicy, Distribution, OriginAccessIdentity, OriginRequestPolicy, ResponseHeadersPolicy, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, IHostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { BlockPublicAccess, Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { ENVIRONMENT, HOSTED_ZONE_ID, HOSTED_ZONE_NAME, PROJECT_NAME } from '../constants';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket: Bucket = new Bucket(this, `${PROJECT_NAME}-${ENVIRONMENT}-bucket`, {
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.RETAIN,
      versioned: true,
      encryption: BucketEncryption.S3_MANAGED,
    });

    const originAccessIdentity: OriginAccessIdentity = new OriginAccessIdentity(
      this,
      `${PROJECT_NAME}-${ENVIRONMENT}-OAI`,
      {
        comment: 'My OAI for the S3 Website',
      }
    );

    websiteBucket.grantRead(originAccessIdentity);

    let cloudfrontDistri: Distribution;
    if (ENVIRONMENT === 'prod') {

      const zone: IHostedZone = HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
        zoneName: HOSTED_ZONE_NAME,
        hostedZoneId: HOSTED_ZONE_ID
      });

      const certificate: DnsValidatedCertificate = new DnsValidatedCertificate(this, 'SiteCertificate', {
        domainName: HOSTED_ZONE_NAME,
        hostedZone: zone,
        region: 'us-east-1'
      });

      cloudfrontDistri = new Distribution(
        this,
        `${PROJECT_NAME}-${ENVIRONMENT}-cd`,
        {
          certificate,
          domainNames: [HOSTED_ZONE_NAME],
          defaultRootObject: 'index.html',
          defaultBehavior: {
            origin: new S3Origin(websiteBucket, {
              originAccessIdentity: originAccessIdentity
            }),
            originRequestPolicy: OriginRequestPolicy.CORS_S3_ORIGIN,
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            responseHeadersPolicy: ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
            cachePolicy: CachePolicy.CACHING_OPTIMIZED,
            allowedMethods: AllowedMethods.ALLOW_ALL,
          }
        }
      );

      new ARecord(this, 'websiteARecord', {
        recordName: HOSTED_ZONE_NAME,
        target: RecordTarget.fromAlias(
          new CloudFrontTarget(cloudfrontDistri)
        ),
        zone
      });
    } else {
      cloudfrontDistri = new Distribution(
        this,
        `${PROJECT_NAME}-${ENVIRONMENT}-cd`,
        {
          defaultRootObject: 'index.html',
          defaultBehavior: {
            origin: new S3Origin(websiteBucket, {
              originAccessIdentity: originAccessIdentity
            }),
            originRequestPolicy: OriginRequestPolicy.CORS_S3_ORIGIN,
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            responseHeadersPolicy: ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
            cachePolicy: CachePolicy.CACHING_OPTIMIZED,
            allowedMethods: AllowedMethods.ALLOW_ALL,
          }
        }
      );
    }


    new cdk.CfnOutput(this, 'websiteBucketName', {
      value: websiteBucket.bucketName
    });
    new cdk.CfnOutput(this, 'cloudFrontDistId', {
      value: cloudfrontDistri.distributionId
    });
  }
}
