document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let url = new URL(tabs[0].url).hostname;

        fetch(chrome.runtime.getURL("blocklist.json"))
          .then(response => response.json())
          .then(data => {
            let statusElement = document.getElementById("status");
            if (data.malicious_urls.includes(url)) {
                statusElement.textContent = "Malicious Site!";
                statusElement.style.color = "red";
            } else {
                statusElement.textContent = "Safe Site";
                statusElement.style.color = "green";
            }
          });
    });
});
