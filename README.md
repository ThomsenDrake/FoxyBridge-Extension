# FoxyBridge Extension

This extension is built to work with the [FoxyBridge Chrome Extension Conversion Tool](https://github.com/ThomsenDrake/FoxyBridge), which must be installed separately.

## Key Features

- ~~Seamlessly integrates with the FoxyBridge conversion tool to enhance extension workflows.~~ **feature in development**
- Download and view the source code of browser extensions from multiple extension stores.
- Built on the robust, prebuilt Firefox version of crxviewer.
- Provides an intuitive interface for exploring extension files across platforms.

## Roadmap

- Automatically trigger a FoxyBridge conversion on extension downloaad
- Automatically install converted extension
- Replace "Add to Chrome" button with "Add to Firefox" button that initiates extension download

## Setup Instructions

1. Install the [FoxyBridge Chrome Extension Conversion Tool](https://github.com/ThomsenDrake/FoxyBridge) separately.
2. Download or clone this repository.
3. In the project root, run:
   ```bash
   npm install
   ```
   to install the required dependencies.
4. Build the extension by running:
   ```bash
   node make.js
   ```
   This creates a new folder called **dist** containing the built extension.
5. Load the built extension in Firefox:
   - Open Firefox and navigate to `about:addons`.
   - Click the gear icon next to "Manage Your Extensions" and select **"Install Add-on From File..."**.
   - In the dialog, locate the **dist** folder and select the `.xpi` file (typically named `FoxyBridge-Extension.xpi`).

## License

(c) 2025 Drake Thomsen (<drake@draket.xyz>)  

The core of this extension is built on the prebuilt Firefox version of [crxviewer](https://github.com/Rob--W/crxviewer.git) by [Rob Wu](https://robwu.nl/). Crxviewer is a browser extension that lets users download the source code of other extensions from the Chrome Web Store, Firefox Add-ons site, or Opera extension store. Its repository contains the code for the Chrome, Firefox, and Opera versions, along with an automated build function that handles their minor differences. This extension uses the Firefox build as its foundation and adds functionality to communicate with the FoxyBridge tool installed on the user's computer.

Licensed under the Mozilla Public License, v. 2.0.  
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.