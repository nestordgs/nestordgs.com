import * as cdk from 'aws-cdk-lib';
import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { DnsValidatedCertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { AllowedMethods, CachePolicy, Distribution, HeadersFrameOption, HeadersReferrerPolicy, ResponseHeadersPolicy, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
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

    const websiteOrigin = S3BucketOrigin.withOriginAccessControl(websiteBucket);

    const securityHeadersPolicy = new ResponseHeadersPolicy(this, 'SecurityHeadersPolicy', {
      securityHeadersBehavior: {
        contentSecurityPolicy: {
          contentSecurityPolicy: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://*.posthog.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests",
          override: true,
        },
        contentTypeOptions: { override: true },
        frameOptions: { frameOption: HeadersFrameOption.DENY, override: true },
        referrerPolicy: { referrerPolicy: HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN, override: true },
        strictTransportSecurity: {
          accessControlMaxAge: Duration.days(365),
          includeSubdomains: true,
          preload: true,
          override: true,
        },
        xssProtection: { protection: false, override: true },
      },
    });

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
            origin: websiteOrigin,
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            responseHeadersPolicy: securityHeadersPolicy,
            cachePolicy: CachePolicy.CACHING_OPTIMIZED,
            allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
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
            origin: websiteOrigin,
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            responseHeadersPolicy: securityHeadersPolicy,
            cachePolicy: CachePolicy.CACHING_OPTIMIZED,
            allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
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
