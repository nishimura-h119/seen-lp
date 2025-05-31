console.log("✅ next.config.js is loaded");

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
