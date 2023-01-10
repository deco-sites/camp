import { useEffect } from "preact/hooks";
import { AuthChangeEvent } from "supabase";
import { getSupabaseClient } from "$camp/clients/supabase.ts";

export const useAuthStateChange = (
  callback: (event: AuthChangeEvent, res?: Response) => void,
) =>
  useEffect(() => {
    const client = getSupabaseClient();
    const { data: authListener } = client.auth.onAuthStateChange(
      (event, session) => {
        console.log({ event, session });

        // if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        // delete cookies on sign out
        //   const expires = new Date(0).toUTCString()
        //   document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
        //   document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
        // } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        //   const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
        // document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
        // document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
        // }

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
