import type { ComponentChildren } from "preact";
import NavBar from "./NavBar.tsx";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="min-h-screen  text-primary-light bg-gray-100">
      <NavBar />
      <div>
        {props.children}
      </div>
    </div>
  );
}
