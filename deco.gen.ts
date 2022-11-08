// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...path].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/InspectVSCode.tsx";
import * as $$$0 from "./sections/GetStarted.tsx";
import * as $$$1 from "./sections/Head.tsx";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...path].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/index.tsx": $2,
  },
  islands: { "./islands/InspectVSCode.tsx": $$0 },
  sections: { "./sections/GetStarted.tsx": $$$0, "./sections/Head.tsx": $$$1 },
  loaders: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
