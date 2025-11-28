import { createJiti } from "../../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@vben/turbo-run": "/var/www/html/by_new/go_vben_backend/scripts/turbo-run"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/var/www/html/by_new/go_vben_backend/scripts/turbo-run/src/index.js")} */
const _module = await jiti.import("/var/www/html/by_new/go_vben_backend/scripts/turbo-run/src/index.ts");

export default _module?.default ?? _module;