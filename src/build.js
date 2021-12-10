// const vuePlugin = require("esbuild-vue");

import vuePlugin from "esbuild-vue";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/main.js"],
  bundle: true,
  outdir: "./public/js",
  logLevel: "info",
  plugins: [vuePlugin()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  format: "esm",
  target: "esnext",
  minify: true,
  splitting: true,
});
