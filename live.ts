import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import partytownPlugin from "$live/plugins/partytown.ts";
import gaPlugin from "$live/plugins/ga.ts";
import jitsuPlugin from "$live/plugins/jitsu.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  site: "camp",
  siteId: 92,
  domains: ["deco.camp"],
  loginUrl: "/login",
  plugins: [
    stylesPlugin(),
    partytownPlugin({ forward: ["gtag", "jitsu"] }),
    gaPlugin({ trackingId: "G-5KHCG36F89" }),
    jitsuPlugin({ key: "js.9wshjdbktbdeqmh282l0th.c354uin379su270joldy2" }),
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
