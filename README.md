# gl-pw-gen

A zero‑setup CLI to scaffold Playwright test repositories with batteries included: TS/JS presets, POM, custom fixtures, API client, Allure, CI (GitHub/GitLab), Husky hooks, and a Zephyr publish stub.

## Quick Start

```bash
npm run build
npx gl-pw-gen init my-tests \  --reporter allure \  --ci github \  --preset hybrid
```

Then:

```bash
cd my-tests
npm i
npx playwright install --with-deps
cp env.example .env
npm test
```

For detailed options, see [USAGE.md](./USAGE.md).

## Run Functional Tests

npx vitest run
