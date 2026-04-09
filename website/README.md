# Website

Frontend application for the `nestordgs.com` personal site. This package contains the public-facing portfolio UI, including the hero section, experience timeline, featured LiftWiz project, profile/toolkit section, bilingual copy, theme switching, and contact links.

## Getting Started

These instructions explain how to install dependencies, run the site locally, execute the tests, and build the static files that are later uploaded by the deployment workflow.

### Main Features

- Single-page portfolio built with React and Vite
- English and Spanish copy managed through `i18next`
- Dark and light theme toggle
- Responsive navigation for desktop and mobile
- Experience timeline and consulting profile sections
- Featured project showcase for LiftWiz
- Optional PostHog analytics when public Vite variables are present

### Project Structure

- `src/components/` for the site sections and shared UI pieces
- `src/translations/` for English and Spanish content plus translation context
- `src/hooks/` for UI behavior like theme management
- `public/` for static images and icons served directly by Vite
- `design/` for source design assets used to create the site visuals

### Prerequisites

- Node.js 20.x
- npm
- Optional PostHog environment variables if you want analytics enabled during a build

### Installing

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Optional Environment Variables

These values are only needed when you want analytics enabled:

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_PUBLIC_POSTHOG_KEY` | Optional | Public PostHog project key |
| `VITE_PUBLIC_POSTHOG_HOST` | Optional | PostHog host override, defaults to `https://us.i.posthog.com` |

Example:

```bash
VITE_PUBLIC_POSTHOG_KEY=phc_xxx VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com npm run build
```

## Running the Tests

The frontend test suite uses Vitest, React Testing Library, and Happy DOM.

Run the test runner in watch mode:

```bash
npm test
```

Run the CI-oriented test command with coverage:

```bash
npm run test:ci
```

### Break Down of the Tests

The current tests focus on component rendering and UI behavior, including:

- App rendering
- Menu and header rendering
- Experience section behavior
- Language switch behavior
- Theme hook behavior
- Translation context and reducer behavior

### Coding Style Checks

There is currently no dedicated lint script in this package. The main validation mechanisms are the test suite and the production build.

## Deployment

Create a production build with:

```bash
npm run build
```

Preview the generated build locally:

```bash
npm run preview
```

The production build is written to `dist/`. The repository deployment workflows then:

1. Deploy or update the infrastructure stack in `infra/`.
2. Build this package.
3. Upload `dist/` to the S3 bucket created by the CDK stack.
4. Invalidate the CloudFront cache for `/index.html`.

### Notes About Runtime Behavior

- The app initializes PostHog only when `VITE_PUBLIC_POSTHOG_KEY` is defined.
- The theme toggle persists the selected theme in `localStorage`.
- The site content is bilingual, with English loaded by default and Spanish available through the language switch.

## Built With

- [React 18](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [i18next](https://www.i18next.com/)
- [Font Awesome](https://fontawesome.com/)
- [PostHog](https://posthog.com/) for optional analytics
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Contributing

This package is part of a personal website project and is not accepting external contributions.

## Versioning

The website is maintained directly through the repository history.

## Authors

- Nestor Gutiérrez - [nestordgs](https://github.com/nestordgs)

## Acknowledgments

- README structure adapted from [PurpleBooth's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- Vite, Tailwind CSS, and React for the frontend foundation
