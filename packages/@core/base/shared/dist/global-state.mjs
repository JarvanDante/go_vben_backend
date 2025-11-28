import { createJiti } from "../../../../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@vben-core/shared": "/var/www/html/by_new/go_vben_backend/packages/@core/base/shared"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/var/www/html/by_new/go_vben_backend/packages/@core/base/shared/src/global-state.js")} */
const _module = await jiti.import("/var/www/html/by_new/go_vben_backend/packages/@core/base/shared/src/global-state.ts");

export const globalShareState = _module.globalShareState;