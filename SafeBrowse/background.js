const maliciousSites = [
    "example-bad-site.com",
    "phishing-site.net",
    "malware-download.com"
];

// Listen for URL changes
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    let url = new URL(details.url).hostname;

    if (maliciousSites.includes(url)) {
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("blocked.html") });
    }
}, { urls: ["<all_urls>"] });
