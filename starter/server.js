import { app } from "./app.js";

// Run the local demo server; do not expose it publicly.
const port = Number(process.env.PORT ?? 3000);
app.listen(port, "127.0.0.1", () => {
  console.log(`Demo running at http://localhost:${port}`);
});
