import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      <props.Component />
    </>
  );
}
