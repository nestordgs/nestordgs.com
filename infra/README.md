# Infrastructure

AWS CDK application for the `nestordgs.com` website. This package provisions the static hosting infrastructure used by the frontend build: a private versioned S3 bucket, a CloudFront distribution, and, in production, the custom domain resources in Route 53 and ACM.

## Getting Started

These instructions explain how to install dependencies, synthesize the stack, run tests, and deploy the infrastructure from this package.

### What This Stack Creates

- One private S3 bucket with versioning enabled and server-side encryption
- One CloudFront distribution backed by that bucket through an Origin Access Identity
- CloudFormation outputs for the bucket name and CloudFront distribution ID
- In production only:
  - A DNS-validated ACM certificate in `us-east-1`
  - A Route 53 alias record pointing the root domain to CloudFront

### Prerequisites

- Node.js 20.x
- npm
- AWS CLI configured with credentials that can deploy CDK stacks
- AWS CDK CLI available globally or through `npx`
- A bootstrapped CDK environment in the AWS account/region where you plan to deploy
- A Route 53 hosted zone for the production domain

### Installing

Install dependencies:

```bash
npm ci
```

The stack reads its configuration from environment variables:

| Variable | Required | Description |
| --- | --- | --- |
| `PROJECT_NAME` | Yes | Prefix used for bucket and distribution resource names |
| `ENVIRONMENT` | Yes | Deployment target, typically `dev` or `prod` |
| `HOSTED_ZONE_ID` | Production only | Route 53 hosted zone ID for the root domain |
| `HOSTED_ZONE_NAME` | Production only | Root domain name used by Route 53 and ACM |
| `AWS_REGION` | Recommended | Region used by AWS CLI and GitHub Actions commands |

For a development synth:

```bash
PROJECT_NAME=nestordgs ENVIRONMENT=dev npm run cdk -- synth
```

For a production synth:

```bash
PROJECT_NAME=nestordgs ENVIRONMENT=prod HOSTED_ZONE_ID=Z123456789 HOSTED_ZONE_NAME=example.com npm run cdk -- synth
```

## Running the Tests

Infrastructure tests are written with Jest and AWS CDK assertions.

```bash
npm test
```

### What the Tests Cover

The current test suite verifies that the synthesized template includes:

- An S3 bucket
- Bucket versioning
- A CloudFront distribution

### Coding Style Checks

There is currently no dedicated lint script in this package. Validation here comes from TypeScript compilation, CDK synthesis, and the Jest assertion suite.

## Deployment

Local deployment uses the AWS account and region configured in your shell through the AWS CLI/CDK.

If the target account and region have not been bootstrapped for CDK yet, run:

```bash
npx cdk bootstrap
```

Deploy to development:

```bash
PROJECT_NAME=nestordgs ENVIRONMENT=dev npm run cdk -- deploy --all --require-approval never
```

Deploy to production:

```bash
PROJECT_NAME=nestordgs ENVIRONMENT=prod HOSTED_ZONE_ID=Z123456789 HOSTED_ZONE_NAME=example.com npm run cdk -- deploy --all --require-approval never
```

### Notes About the Stack

- The S3 bucket is private and accessed through CloudFront only.
- The bucket uses `RemovalPolicy.RETAIN`, which is a safer default for website assets.
- Production creates the certificate in `us-east-1`, which is required by CloudFront for custom domains.
- The frontend deployment workflow reads the `websiteBucketName` and `cloudFrontDistId` outputs after this stack finishes.

### Useful Commands

- `npm run build` compiles TypeScript
- `npm run watch` recompiles on file changes
- `npm run test` runs the Jest suite
- `npm run cdk -- synth` generates the CloudFormation template
- `npm run cdk -- diff` compares the local stack with the deployed stack
- `npm run cdk -- deploy --all --require-approval never` deploys the stack

## Built With

- [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
- [Amazon S3](https://aws.amazon.com/s3/)
- [Amazon CloudFront](https://aws.amazon.com/cloudfront/)
- [Amazon Route 53](https://aws.amazon.com/route53/)
- [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)
- [Jest](https://jestjs.io/) with CDK assertions

## Contributing

This is infrastructure for a personal website and is not accepting external contributions.

## Versioning

This package follows the repository history instead of a separate release stream.

## Authors

- Nestor Gutiérrez - [nestordgs](https://github.com/nestordgs)

## Acknowledgments

- AWS CDK for the infrastructure abstraction
- GitHub Actions workflows in the root repository for automating deployments
