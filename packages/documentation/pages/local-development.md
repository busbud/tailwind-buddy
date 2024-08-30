# Local Development

1. Install pnpm: `npm i -g pnpm`
2. In the root folder:
   - `nvm use`
   - `pnpm install`
3. In the `core` folder:
   - `pnpm build -w`
   - For unit tests: `pnpm test:unit`

For a "real world example":

1. In the `ui` folder:
   - `pnpm install`
   - `pnpm build -w`
2. In the `sandbox` folder:
   - `pnpm install`
   - `pnpm dev`
