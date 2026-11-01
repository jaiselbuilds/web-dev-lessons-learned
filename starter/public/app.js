// Reusable UI code is provided ahead of recording; focus the live edit on fetch().
const form = document.querySelector("#search-form");
const severitySelect = document.querySelector("#severity");
const status = document.querySelector("#status");
const resultsList = document.querySelector("#results");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Keep the browser on the same page.
  status.textContent = "Searching…";
  resultsList.replaceChildren();

  try {
    
    
    const response = await fetch(
      `/api/vulnerabilities?severity=${encodeURIComponent(severitySelect.value)}`
    );
    const data = await response.json();


    // A 400 response still resolves fetch(), so explicitly check its status.
    if (!response.ok) {
      throw new Error(data.error ?? `HTTP ${response.status}`);
    }

    // An empty successful search is not an HTTP error.
    if (data.count === 0) {
      status.textContent = `HTTP ${response.status} — no matching records.`;
      return;
    }

    status.textContent = `HTTP ${response.status} — ${data.count} matching record(s).`;
    for (const item of data.results) {
      // Use textContent to treat record values as text, not HTML markup.
      const li = document.createElement("li");
      li.textContent = `${item.id}: ${item.title} (${item.severity})`;
      resultsList.append(li);
    }
  } catch (error) {
    // A network or HTTP failure should produce a readable message.
    status.textContent = `Unable to load results: ${error.message}`;
  }
});
