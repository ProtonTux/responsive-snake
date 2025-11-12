// main.ts
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve((req) => {
  const url = new URL(req.url);
  if (url.pathname === "/") {
    return new Response(
      Deno.readTextFileSync("index.html"),
      { headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }

  // serve static files (like CSS)
  return serveDir(req, { fsRoot: "static" });
});
