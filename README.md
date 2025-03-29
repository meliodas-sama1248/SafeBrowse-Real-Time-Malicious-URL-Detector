# 🔒 SafeBrowse - Real-Time Malicious URL Detector

SafeBrowse is a browser extension designed to **protect users from malicious websites** by detecting and blocking unsafe URLs. It enhances web security by preventing access to phishing, malware, and scam websites.

---

## 📌 Project Overview

With the increasing number of cyber threats, SafeBrowse helps users stay safe online by **automatically blocking harmful websites**. The extension is built using **Chrome Extensions API** and integrates a real-time blocklist to restrict access to dangerous sites. Users attempting to visit flagged sites are redirected to a warning page.

---

## 🔍 How It Works

1. **Detect Malicious URLs** – The extension continuously monitors URLs.
2. **Block Harmful Sites** – If a URL is flagged as malicious, access is restricted.
3. **Redirect Users to Warning Page** – Instead of loading the malicious page, users see a security warning.

---

## 🚀 Features

- **Real-Time URL Blocking** – Prevents users from accessing dangerous websites.
- **Background Protection** – Runs silently in the background.
- **Warning Redirection** – Redirects users to an alert page when a threat is detected.
- **Customizable Blocklist** – Easily expand the list of malicious URLs.
- **Lightweight & Fast** – Minimal impact on browser performance.

---

## 💻 Tech Stack

- **Manifest V3** (Chrome Extension API)
- **JavaScript** (Background and Content Scripts)
- **HTML, CSS** (Warning Page UI)
- **JSON** (Blocklist Storage)

---

## 🔐 Security Measures

- Uses **`webNavigation.onBeforeNavigate`** to detect unsafe websites.
- Implements **redirect mechanisms** to prevent phishing and malware attacks.
- Follows **best practices** for browser extension security.

---

## 📜 License
This project is licensed under the [MIT License](./LICENSE).

---

🔹 **Stay Safe Online with SafeBrowse!**
