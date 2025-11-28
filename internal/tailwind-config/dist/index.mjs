import { createJiti } from "../../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@vben/tailwind-config": "/var/www/html/by_new/go_vben_backend/internal/tailwind-config"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/var/www/html/by_new/go_vben_backend/internal/tailwind-config/src/index.js")} */
const _module = await jiti.import("/var/www/html/by_new/go_vben_backend/internal/tailwind-config/src/index.ts");

export default _module?.default ?? _module;