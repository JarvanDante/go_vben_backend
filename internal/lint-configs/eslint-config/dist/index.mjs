import { createJiti } from "../../../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@vben/eslint-config": "/var/www/html/by_new/go_vben_backend/internal/lint-configs/eslint-config"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/var/www/html/by_new/go_vben_backend/internal/lint-configs/eslint-config/src/index.js")} */
const _module = await jiti.import("/var/www/html/by_new/go_vben_backend/internal/lint-configs/eslint-config/src/index.ts");

export const defineConfig = _module.defineConfig;