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
    it('Should contain at least 1 s3 bucket', () => {
      template.resourceCountIs('AWS::S3::Bucket', 1);

      template.hasResourceProperties('AWS::S3::Bucket', Match.objectLike({
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
    it('Should contain at least 1 Cloudfront Distribution', () => {
      template.resourceCountIs('AWS::CloudFront::Distribution', 1);
    });
  })
})
