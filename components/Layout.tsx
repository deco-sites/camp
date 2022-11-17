import NavBar from "./NavBar.tsx";

export default function Layout(props: any) {
  return (
    <div class="min-h-screen  text-primary-light">
      <NavBar />
      <div>
        {props.children}
      </div>
    </div>
  );
}
