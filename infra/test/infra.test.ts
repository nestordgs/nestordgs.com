import { App, Stack } from "aws-cdk-lib"
import { Match, Template } from "aws-cdk-lib/assertions";
import { InfraStack } from "../lib/infra-stack";

describe('Website is Created', () => {

  let app: App;
  let stack: Stack;
  let template: Template;

  beforeEach(() => {
    app = new App();

    stack = new InfraStack(app, 'WebsiteStack');

    template = Template.fromStack(stack);
  })

  describe('S3 Bucket', () => {
    it('Should contain one private, versioned S3 bucket', () => {
      template.resourceCountIs('AWS::S3::Bucket', 1);

      template.hasResourceProperties('AWS::S3::Bucket', Match.objectLike({
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: true,
          BlockPublicPolicy: true,
          IgnorePublicAcls: true,
          RestrictPublicBuckets: true,
        },
        VersioningConfiguration: {
          Status: 'Enabled'
        },
      }))
    });

    it('Should have retention policy', () => {
      template.hasResourceProperties('AWS::S3::BucketPolicy', {
        Bucket: Match.objectLike({
          Ref: Match.stringLikeRegexp('testingdev*')
        }),
      });
    });
  })

  describe('Cloudfront Distribution', () => {
    it('Should expose the site only through HTTPS GET and HEAD requests', () => {
      template.resourceCountIs('AWS::CloudFront::Distribution', 1);
      template.hasResourceProperties('AWS::CloudFront::Distribution', Match.objectLike({
        DistributionConfig: Match.objectLike({
          DefaultCacheBehavior: Match.objectLike({
            AllowedMethods: ['GET', 'HEAD'],
            ViewerProtocolPolicy: 'redirect-to-https',
          }),
        }),
      }));
    });

    it('Should attach restrictive browser security headers', () => {
      template.hasResourceProperties('AWS::CloudFront::ResponseHeadersPolicy', Match.objectLike({
        ResponseHeadersPolicyConfig: Match.objectLike({
          SecurityHeadersConfig: Match.objectLike({
            ContentSecurityPolicy: Match.objectLike({
              ContentSecurityPolicy: Match.stringLikeRegexp("default-src 'self'"),
            }),
            FrameOptions: { FrameOption: 'DENY', Override: true },
            StrictTransportSecurity: Match.objectLike({
              AccessControlMaxAgeSec: 31536000,
              IncludeSubdomains: true,
              Preload: true,
            }),
          }),
        }),
      }));
    });
  })
})
