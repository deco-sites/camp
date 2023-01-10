import { AuthChangeEvent } from "supabase";
import { useAuthStateChange } from "$camp/utils/auth.tsx";

export const RETURN_URL_QUERY_PARAM = "returnUrl";

export const DEFAULT_RETURN_URL = "/live";

export default function AuthListener() {
  useAuthStateChange((event: AuthChangeEvent) => {
    if (event === "SIGNED_IN") {
      const query = new URLSearchParams(window.location?.search);
      const returnUrl = query.get(RETURN_URL_QUERY_PARAM);

      window.location.replace(
        returnUrl || DEFAULT_RETURN_URL,
      );
    } else if (event === "SIGNED_OUT") {
      window.location.replace("/");
    }
  });
  return <span></span>;
}
