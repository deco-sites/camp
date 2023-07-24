/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import manifest from "./live.gen.ts";
import { start } from "$fresh/server.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import partytownPlugin from "partytown/mod.ts";
import prefetchPlugin from "prefetch";
import { $live } from "$live/mod.ts";
import site from "./site.json" assert { type: "json" };

await start($live(manifest, site), {
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
