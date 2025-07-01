import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  build: require("./build"),
  mode: process.env.NODE_ENV,
});