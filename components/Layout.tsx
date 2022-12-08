import type { ComponentChildren } from "preact";
import NavBar from "./NavBar.tsx";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="min-h-screen  text-primary-light bg-gray-100">
      <div class="relative ">
        <div class="absolute top-[12.5rem] left-36 hidden xl:block animate-wind">
          <img src="/circle.png" />
        </div>
        <div class="absolute top-0 right-0  hidden xl:block">
          <img src="/green-efect.png" />
        </div>
        <div class="absolute top-[22.5rem] left-10  hidden xl:block animate-wind">
          <img src="/script.png" />
        </div>
        <div class="absolute top-[26.25rem] left-44  hidden xl:block animate-wind">
          <img src="/green-triangle.png" />
        </div>
        <div class="absolute top-[12.5rem] right-36  hidden xl:block animate-wind">
          <img src="/purple-triangle.png" />
        </div>
        <div class="absolute top-[25.62rem] right-52 opacity-90  hidden xl:block animate-wind">
          <img src="/cyan-rectangle.png" />
        </div>
        <div class="absolute top-[23.75rem] right-10  hidden xl:block animate-wind">
          <img src="/Arrow 2.png" />
        </div>
        <div class="absolute bottom-[30rem] left-72 hidden xl:block animate-wind">
          <img src="/circle.png" />
        </div>
        <div class="absolute bottom-[11.25rem] left-72 hidden xl:block animate-wind">
          <img src="/green-triangle.png" />
        </div>
        <div class="absolute bottom-[21.87rem] left-20  hidden xl:block animate-wind">
          <img src="/script.png" />
        </div>
        <div class="absolute bottom-[28.12rem] right-72  hidden xl:block animate-wind">
          <img src="/purple-triangle.png" />
        </div>
        <div class="absolute bottom-[17.5rem] right-36  hidden xl:block animate-wind">
          <img src="/Arrow 2.png" />
        </div>
        <div class="absolute opacity-50 bottom-[11.25rem] right-96  hidden xl:block animate-wind">
          <img src="/cyan-rectangle.png" />
        </div>

        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
