/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "banerjeerohan279",
        mongodb_password: "GgOEZEeuu5X4EOVa",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "banerjeerohan279",
      mongodb_password: "GgOEZEeuu5X4EOVa",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
