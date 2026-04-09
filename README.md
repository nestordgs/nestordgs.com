# nestordgs.com

Source code for my personal website and the AWS infrastructure that publishes it. This repository is split into a frontend application in `website/` and an AWS CDK application in `infra/`. The site itself presents my professional profile, experience timeline, contact channels, and a featured project, while the infrastructure provisions the static hosting and CDN layers used to deliver the production build.

## Getting Started

These instructions will get a local copy of the project running for development and testing. Deployment is handled either locally with AWS CDK or through the GitHub Actions workflows included in this repository.

### Project Layout

- `website/` contains the Vite + React frontend.
- `infra/` contains the AWS CDK stack for S3, CloudFront, and the production domain setup.
- `.github/workflows/` contains the CI and deployment pipelines for pull requests, development, and production.

### Prerequisites

You do not need every tool for every task, but this is the baseline setup used by the repo:

- Node.js 20.x
- npm
- AWS CLI configured with credentials that can deploy CDK stacks if you plan to work on `infra/`
- AWS CDK CLI if you want to deploy infrastructure from your machine
- A Route 53 hosted zone if you want to reproduce the production custom-domain deployment

### Installing

Install dependencies for each package separately:

```bash
cd website
npm ci
```

```bash
cd infra
npm ci
```

Run the website locally:

```bash
cd website
npm start
```

The frontend dev server runs on [http://localhost:3000](http://localhost:3000).

If you need to inspect the infrastructure template locally:

```bash
cd infra
PROJECT_NAME=nestordgs ENVIRONMENT=dev npm run cdk -- synth
```

## Running the Tests

Both packages have their own test commands, and the pull request workflow runs both before changes are merged into `main`.

### Frontend Tests

The frontend uses Vitest, React Testing Library, and Happy DOM.

```bash
cd website
npm run test:ci
```

For watch mode during local development:

```bash
cd website
npm test
```

### Infrastructure Tests

The infrastructure package uses Jest with AWS CDK assertions to verify the synthesized stack.

```bash
cd infra
npm test
```

## Deployment

Deployment is split into infrastructure provisioning and static asset publishing.

### Development

Pushing to `main` triggers `.github/workflows/deploy_to_dev.yml`, which:

1. Deploys the CDK stack to the development environment.
2. Builds the frontend in `website/`.
3. Reads the S3 bucket name and CloudFront distribution ID from CloudFormation outputs.
4. Syncs `website/dist` to S3.
5. Invalidates `/index.html` in CloudFront.

### Production

Production deployments are triggered manually through `.github/workflows/deploy_to_prod.yml`. The flow is the same as development, with two important differences:

- The infrastructure stack configures the custom domain with Route 53 and ACM.
- The frontend build can inject PostHog analytics keys through Vite environment variables.

### GitHub Actions Secrets

The workflows expect these secrets:

| Secret | Used For |
| --- | --- |
| `AWS_ACCESS_KEY` | AWS authentication in GitHub Actions |
| `AWS_SECRET_ACCESS_KEY` | AWS authentication in GitHub Actions |
| `AWS_REGION` | Region for deployment and CloudFormation/AWS CLI lookups |
| `PROJECT_NAME` | Prefix used when naming AWS resources |
| `ENVIRONMENT` | Deploy target, typically `dev` or `prod` |
| `HOSTED_ZONE_ID` | Required for production Route 53 integration |
| `HOSTED_ZONE_NAME` | Required for the production root domain and ACM certificate |
| `VITE_PUBLIC_POSTHOG_KEY` | Optional frontend analytics key for production builds |
| `VITE_PUBLIC_POSTHOG_HOST` | Optional PostHog host override |

## Built With

- [React](https://react.dev/) for the frontend UI
- [Vite](https://vite.dev/) for local development and production builds
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) across both packages
- [AWS CDK](https://aws.amazon.com/cdk/) for infrastructure as code
- [GitHub Actions](https://github.com/features/actions) for CI and deployment automation
- [i18next](https://www.i18next.com/) for bilingual site content

## Contributing

This repository is a personal website project. It is not set up for external contributions.

## Versioning

This project is maintained through the main Git history rather than a separate public release process.

## Authors

- Nestor Gutiérrez - [nestordgs](https://github.com/nestordgs)

## Acknowledgments

- README structure adapted from [PurpleBooth's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- AWS CDK, Vite, and React for the tooling that supports the project
