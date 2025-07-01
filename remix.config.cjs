/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    serverBuildPath: "netlify/functions/server.js", // for Netlify function
    server: "./server.js",
    serverModuleFormat: "cjs",
    serverPlatform: "node",
  };