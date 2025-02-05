# QR Code Generator Chrome Extension

A simple and efficient Chrome extension that generates QR codes from URLs. This extension allows users to quickly create QR codes for any valid URL, making it easy to share web pages across devices.

## Features

- Instant QR code generation from any URL
- Input validation for URLs
- Remembers the last used URL
- Keyboard accessibility support
- Clean and intuitive user interface

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. Enter a URL in the input field
3. Click "Generate" or press Enter
4. A QR code will be generated for the entered URL

## Files Structure

- `popup.html` - The main extension popup interface
- `popup.js` - Core functionality and QR code generation logic
- `styles.css` - Extension styling
- `qrcode.min.js` - QR code generation library
- `manifest.json` - Extension configuration
- `icons/` - Extension icons in various sizes

## Technical Details

- Built using vanilla JavaScript
- Uses the QRCode.js library for QR code generation
- Chrome Storage API for saving the last used URL
- Implements accessibility features for better usability

## Requirements

- Google Chrome Browser
- Chrome version that supports Manifest V3

## License

MIT License

## Contributing

Feel free to submit issues and pull requests.
