import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";

await start(manifest, {
  site: "careers",
  domains: ["deco.careers", "deco-careers.deno.dev"],
});
