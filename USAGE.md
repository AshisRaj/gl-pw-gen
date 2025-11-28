# Usage

## CLI
```
Usage: gl-pw-gen init [options] <project-name>

Options:
  --js                         Use JavaScript instead of TypeScript (default: false)
  --ci <provider>              CI provider (github|gitlab|none) (default: "github")
  --reporter <name>            Test reporter (list|html|allure) (default: "allure")
  --zephyr                     Include Zephyr results stub (default: false)
  --no-husky                   Skip Husky hooks
  --preset <name>              Quick preset (web|api|hybrid) (default: "web")
  -V, --version                output the version number
  -h, --help                   display help for command
```

## Recommended Scripts in Generated Project
- `npm test` – run Playwright tests
- `npm run test:ui` – open PW UI mode
- `npm run fmt` – Prettier format
- `npm run lint` – ESLint

## Env Vars (.env)
```
BASE_URL=https://your-app.example
API_BASE_URL=https://api.example
USERNAME=demo
PASSWORD=demo
STORAGE_STATE=.auth/state.json
```

## CI
- **GitHub Actions**: `.github/workflows/ci.yml`
- **GitLab CI**: `.gitlab-ci.yml`

## Allure
When `--reporter allure` is selected, results land in `allure-results/`. Upload it as an artifact in CI, or serve via Allure server.

## Zephyr Stub
A minimal `tools/zephyr/publish-results.ts` is included when `--zephyr` is used. Transform and POST Allure JSON to your Zephyr endpoint.
