import AuthListener from "$camp/islands/AuthListener.tsx";
import type { PageProps } from "$fresh/server.ts";

export default function LoginSuccess({ url }: PageProps) {
  return (
    <div>
      <AuthListener />
      <div class="grid place-items-center h-screen">
        <div class="flex flex-col items-center">
          \o/
        </div>
      </div>
    </div>
  );
}
