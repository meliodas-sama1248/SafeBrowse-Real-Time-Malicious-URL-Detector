let url = window.location.hostname;

fetch(chrome.runtime.getURL("blocklist.json"))
  .then(response => response.json())
  .then(data => {
    if (data.malicious_urls.includes(url)) {
      alert("⚠️ Warning: This website is flagged as malicious!");
    }
  });
