import { useEffect } from "preact/hooks";
import { AuthChangeEvent } from "supabase";
import { getSupabaseClient } from "$deco/clients/supabase/index.ts";

export const useAuthStateChange = (
  callback: (event: AuthChangeEvent, res?: Response) => void,
) =>
  useEffect(() => {
    const client = getSupabaseClient();
    const { data: authListener } = client.auth.onAuthStateChange(
      (event, session) => {
        console.log({ event, session });
        // TODO: Drop this and set the cookies in the client
        fetch("/live/api/credentials", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => callback(event, res));
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

export const useLogout = () => {
  useAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      window.location.replace("/");
    }
  });

  return () => {
    console.log("logging out");
    const client = getSupabaseClient();
    client.auth.signOut();
  };
};
