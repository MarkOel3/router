import { parseCookies, setCookie } from "@tanstack/react-start/server";
import { createServerClient } from "@supabase/ssr";

export function getSupabaseServerClient() {
    return createServerClient(
        "https://vodtzsjfnrhpbehyojfb.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvZHR6c2pmbnJocGJlaHlvamZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTg3NTAsImV4cCI6MjA2NjU5NDc1MH0.awAKuoyn6qJ-ZMps1le438eRKKK6A7aarWnkKhV5p-4",
        {
            cookies: {
                getAll() {
                    return Object.entries(parseCookies()).map(
                        ([name, value]) => ({
                            name,
                            value,
                        })
                    );
                },
                setAll(cookies) {
                    cookies.forEach((cookie) => {
                        setCookie(cookie.name, cookie.value);
                    });
                },
            },
        }
    );
}
