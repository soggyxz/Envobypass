async function resolveURL() {

  const input =
    document.getElementById("urlInput").value;

  const result =
    document.getElementById("result");

  result.innerHTML = "Loading...";

  try {

    const response = await fetch(
      "http://localhost:3000/api/resolve",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: input
        })
      }
    );

    const data = await response.json();

    result.innerHTML =
      "Final URL: " + data.finalUrl;

  } catch (err) {

    result.innerHTML =
      "Error resolving URL";

  }
}