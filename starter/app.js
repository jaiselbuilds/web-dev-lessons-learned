import express from "express";
import { fileURLToPath } from "node:url";
import { vulnerabilities } from "./data.js";

// A separate app module allows tests to start the server on a free port.
export const app = express();

// Serve the ready-made browser interface from /public.
app.use(express.static(fileURLToPath(new URL("./public/", import.meta.url))));

// The only API endpoint in this demo: GET with a severity filter.
app.get("/api/vulnerabilities", (req, res) => {
  // LIVE CODING TASK 1: Replace this placeholder with validation,
  // an array filter, and a JSON response (see LIVE_CODING_CUE_CARD.md).
  return res.status(501).json({ error: "API route not implemented yet." });
});
