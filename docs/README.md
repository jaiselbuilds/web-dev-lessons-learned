# RequestScope

**Trace a Search from Browser to Server—and Back**

RequestScope is an interactive, full-stack web development example built with semantic HTML, responsive CSS, vanilla JavaScript, Node.js, and Express. A small vulnerability search illustrates how browser events become HTTP requests, how a server validates and handles those requests, and how returned JSON updates the document.

The interface follows the visual language of [VulnScope](https://github.com/jpaintsil-neu/vulnscope), while the codebase remains intentionally smaller and self-contained. The provided records are **fictional**, and the server uses an in-memory array rather than MongoDB or the National Vulnerability Database.

- **Repository:** `jpaintsil-neu/requestscope` *(planned; not yet published)*
- **Related project:** [VulnScope](https://github.com/jpaintsil-neu/vulnscope)

## Author

### John Paintsil

- GitHub: [jpaintsil-neu](https://github.com/jpaintsil-neu)
- Focus: browser–server communication, API routing, input validation, and user-facing results.

## Project Objective

Show the complete HTTP request–response lifecycle through one understandable interaction:

1. A visitor selects a severity and submits the search form.
2. JavaScript sends `GET /api/vulnerabilities?severity=HIGH`.
3. An Express route validates the filter and searches a small collection of fictional records.
4. The server returns a status code and a JSON response.
5. JavaScript checks the response and updates the visible results without a full-page reload.

This project intentionally keeps database persistence and real vulnerability feeds out of scope. Its purpose is to demonstrate the connection between the user interface, Fetch API, routing, HTTP responses, and DOM manipulation.

## Pages

### Vulnerability Search — [`starter/public/index.html`](./starter/public/index.html)

The single-page workspace provides:

- A VulnScope-inspired sticky header, branding, and responsive layout.
- A labeled severity selector and an **Apply Filters** action.
- A results panel with accessible status messages.
- A visual summary of the browser → Express → JSON → DOM sequence.
- Instructions for inspecting requests through browser Developer Tools.

The initial route and Fetch call are **deliberately unfinished** so they can be implemented as a focused coding exercise.

## Original JavaScript Functionality

The provided browser code prepares form handling, loading and error feedback, and safe DOM rendering with `textContent`. The learner implements the `fetch()` request and parses its JSON result.

The server setup and four fictional records are already present. The learner completes the Express `GET` route by reading `req.query.severity`, validating the value, filtering the records, and returning an appropriate HTTP status and JSON body.

See the [live coding guide](./LIVE_CODING_CUE_CARD.md) for the precise implementation steps.

## Technologies

- HTML5 and semantic form controls.
- CSS3, Flexbox, Grid, and responsive breakpoints.
- Vanilla JavaScript, ES modules, `async/await`, and the Fetch API.
- Node.js, npm, and Express 5.
- HTTP status codes, query parameters, and JSON.
- Git and GitHub.

**No MongoDB connection, external API credentials, or production dataset is required.**

## Project Structure

```text
requestscope/
├── starter/
│   ├── app.js               
│   ├── data.js               
│   ├── server.js             
│   ├── package.json          
│   └── public/
│       ├── index.html      
│       ├── styles.css       
│       └── app.js           
├── docs/
├── .gitignore
└── README.md
```

The repository deliberately contains **only `starter/`**, not a finished reference implementation, so the implementation steps remain available for the coding walkthrough.

## Design Documentation

The interface takes its navy-and-blue palette, form layout, and page hierarchy from VulnScope. The original VulnScope logo is loaded from the public project repository, with a visible fallback if the icon cannot load.

See [design notes](./docs/DESIGN_NOTES.md) for the visual choices and the distinction between this example and the full VulnScope application.

## Installation and Local Development

**Prerequisites:** Node.js **20 or later** and npm.

```bash
# After publishing on GitHub, clone it as follows:
git clone https://github.com/jpaintsil-neu/requestscope.git
cd requestscope/starter

# Install dependencies and start the local server.
npm install
npm start
```

Open **http://localhost:3000** in your browser, then open Chrome DevTools → **Network → Fetch/XHR**.

> **Starter behavior:** Until the two exercise steps are implemented, the Express endpoint returns `501 Not Implemented`, and the browser code contains a placeholder error. This is expected. The app is a prepared exercise, not a finished search application.

If you are using the downloaded ZIP before GitHub publication, extract it and open its `requestscope/starter` folder instead.

For the exercise, follow [`LIVE_CODING_CUE_CARD.md`](./LIVE_CODING_CUE_CARD.md) and restart the server if necessary. Use `npm run dev` to enable Node's watch mode during development.

## Using the Application

Once the two coding tasks are completed:

- Choose a severity and select **Apply Filters**.
- Observe the HTTP status and matching fictional records in the results panel.
- Examine the GET request URL, response status, and JSON payload in Chrome DevTools.
- Compare a successful search with an unsupported severity sent directly to the API URL.

A successful search with no records is different from a failed request: `CRITICAL` returns `200 OK` with an empty results array, whereas an unsupported value returns a `400` validation error.

## API Endpoint

**GET** `/api/vulnerabilities?severity=HIGH`

After implementation, the expected outcomes are:

| Query | Status | Result |
| --- | --- | --- |
| `severity=HIGH` | `200 OK` | Two matching fictional records |
| `severity=ALL` | `200 OK` | All four records |
| `severity=CRITICAL` | `200 OK` | No matches; empty results array |
| `severity=INVALID` | `400 Bad Request` | JSON validation error |
| Unknown endpoint | `404 Not Found` | No matching route |

The API uses `count` and `results` in successful JSON responses. These outcomes are **implementation targets**, not claims that the starter works before the exercise is completed.

## Code Quality and Validation

The code keeps server setup separate from the Express app and uses short inline comments to explain the key operations. Browser results are rendered with `textContent`, reducing the risk of inserting untrusted HTML.

Recommended checks after implementation include JavaScript syntax, HTTP status handling, the `HIGH`/`ALL`/`CRITICAL`/`INVALID` cases, and keyboard interaction with the form. There is no automated test suite in this starter-only repository.

## Accessibility

The interface includes a skip link, labeled native form controls, visible keyboard focus, a live results status, and responsive styling. These design considerations should be checked manually; they are not a formal accessibility conformance claim.

## Visual Reference

The branded interface is designed to resemble the search-and-filter workspace in [VulnScope](https://github.com/jpaintsil-neu/vulnscope), while focusing on one local HTTP example. The original VulnScope logo and visual identity remain attributed to that project.

## References

- [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Express — Routing](https://expressjs.com/en/guide/routing.html)
- [MDN — Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

An individual portfolio example focused on explaining and implementing client–server communication.
