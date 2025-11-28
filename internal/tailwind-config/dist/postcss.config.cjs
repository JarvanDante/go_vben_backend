const { createJiti } = require("../../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/lib/jiti.cjs")

const jiti = createJiti(__filename, {
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

/** @type {import("/var/www/html/by_new/go_vben_backend/internal/tailwind-config/src/postcss.config.js")} */
module.exports = jiti("/var/www/html/by_new/go_vben_backend/internal/tailwind-config/src/postcss.config.ts")