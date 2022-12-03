/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import manifest from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import partytownPlugin from "partytown/mod.ts";
import prefetchPlugin from "prefetch";

await start(manifest, {
  port: 3000,
  plugins: [
    stylesPlugin(),
    prefetchPlugin(),
    partytownPlugin(),
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
