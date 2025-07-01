/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    // other config...
    serverBuildTarget: "netlify",
    server: "./server.js", // optional: only needed for custom logic
    // if you use MDX or other plugins, don't remove them
  };