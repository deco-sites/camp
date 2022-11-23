import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GoogleTagManager.tsx";

export default function App(props: AppProps) {
  return (
    <>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && <GoogleTagManager trackingId="G-5KHCG36F89" />}
      <props.Component />
    </>
  );
}
