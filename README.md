# MemeScan Browser Extension

Chrome extension that integrates with Pump.fun and Axiom charts to analyze memecoin risks.

## Setup

1. Clone or unzip the repo.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (top right toggle).
4. Click **Load unpacked** and select the `memescan-extension` folder.
5. The extension icon will appear in your toolbar.

## Usage

- Visit Pump.fun or Axiom charts.
- A black **Analyze** button will appear fixed in the bottom-right corner.
- Click **Analyze** button.
- When prompted, enter the token address.
- The extension calls the backend API to fetch domain and token risk data and shows an alert with the risk level.

## Backend

Make sure your backend API (e.g., from `memescan-backend`) is running and accessible at the URL defined in the extension's `manifest.json` host permissions (default: `http://localhost:4000`).

## Notes

- This is a minimal prototype for demonstration.
- For production, consider better UI and security (e.g., OAuth, API keys).
