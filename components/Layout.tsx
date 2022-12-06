import type { ComponentChildren } from "preact";
import NavBar from "./NavBar.tsx";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="min-h-screen  text-primary-light bg-gray-100">
      <div class="relative ">
        <div class="absolute top-[200px] left-36 hidden xl:block">
          <img src="/circle.png" />
        </div>
        <div class="absolute top-0 right-0  hidden xl:block">
          <img src="/green-efect.png" />
        </div>
        <div class="absolute top-[350px] left-10  hidden xl:block">
          <img src="/script.png" />
        </div>
        <div class="absolute top-[420px] left-44  hidden xl:block">
          <img src="/green-triangle.png" />
        </div>
        <div class="absolute top-[200px] right-36  hidden xl:block">
          <img src="/purple-triangle.png" />
        </div>
        <div class="absolute top-[410px] right-52  hidden xl:block">
          <img src="/cyan-rectangle.png" />
        </div>

        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
