export default function Layout(props: any) {
  return (
    <div class="min-h-screen bg-primary-dark text-primary-light">
      {props.children}
    </div>
  );
}
