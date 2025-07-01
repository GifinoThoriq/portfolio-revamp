/** @type {import('@remix-run/dev').AppConfig} */
export default {
    serverBuildTarget: "netlify", // ✅ this triggers the internal function build
    ignoredRouteFiles: ["**/.*"],
  };