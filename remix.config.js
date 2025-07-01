/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "vercel",
    server: "./server-vercel.js", // you'll create this file next
    ignoredRouteFiles: ["**/.*"], // default
    // other configs if any...
  };