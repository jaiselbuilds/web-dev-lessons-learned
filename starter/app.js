import express from "express";
import { fileURLToPath } from "node:url";
import { vulnerabilities } from "./data.js";

// A separate app module allows tests to start the server on a free port.
export const app = express();


app.use(express.static(fileURLToPath(new URL("./public/", import.meta.url))));


app.get("/api/vulnerabilities", (req, res) => {
  
  
const severity = req.query.severity; // Read the query parameter.

const allowed = ["ALL", "LOW", "MEDIUM", "HIGH", "CRITICAL"];

// Reject unsupported severity values.
if (typeof severity !== "string" || !allowed.includes(severity)) {
  return res.status(400).json({ error: "Choose a valid severity." });
}

// Filter the sample vulnerability records.
const results = severity === "ALL"
  ? vulnerabilities
  : vulnerabilities.filter((item) => item.severity === severity);

// Return the matching records as JSON.
return res.status(200).json({ count: results.length, results });

});
