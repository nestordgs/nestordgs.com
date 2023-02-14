import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { AllowedMethods, CachePolicy, Distribution, OriginAccessIdentity, OriginRequestPolicy, ResponseHeadersPolicy, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BlockPublicAccess, Bucket, BucketEncryption, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { ENVIRONMENT, PROJECT_NAME } from '../constants';

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

    const cloudfrontDistri: Distribution = new Distribution(
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

    new cdk.CfnOutput(this, 'websiteBucketName', {
      value: websiteBucket.bucketName
    });
    new cdk.CfnOutput(this, 'cloudFrontDistId', {
      value: cloudfrontDistri.distributionId
    });
  }
}
