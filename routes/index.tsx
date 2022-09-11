import { createLiveHandler, LivePage, LivePageData } from "$live/live.tsx";
import type { PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Layout from "../components/Layout.tsx";
import GetStarted from "../components/GetStarted.tsx";

const render = (props: PageProps<LivePageData>) => (
  <Layout>
    <Head />
    <GetStarted />
    <LivePage {...props} />
  </Layout>
);

export const handler = createLiveHandler();
export default render;
