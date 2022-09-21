// ssr.jsx
import * as React from "npm:react";
import { renderToReadableStream } from "npm:react-dom/server";

const App = () => (
  <html>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
);

const options = {
  headers: {
    "Content-Type": "text/html",
  },
};

Deno.serve(
  { port: 8080 },
  async () => new Response(await renderToReadableStream(<App />), options),
);