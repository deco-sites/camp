import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";

await start(manifest, {
  site: "camp",
  domains: ["deco.camp"],
});
