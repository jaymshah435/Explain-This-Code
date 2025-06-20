document.getElementById("explain").addEventListener("click", async () => {
  const code = document.getElementById("code").value;

  // Send code to backend for explanation
  const response = await fetch("http://localhost:3003/api/explain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code })
  });

  // Display explanation or error
  const data = await response.json();
  document.getElementById("output").innerText = data.explanation || "Error!";
});

// Close the popup
document.getElementById("close").addEventListener("click", () => {
  window.close();
});