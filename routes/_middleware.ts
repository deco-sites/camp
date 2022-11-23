import { withLive } from "$live/live.ts";

export const handler = withLive({
  site: "camp",
  siteId: 92,
  domains: ["deco.camp"],
});
