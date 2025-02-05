class QRCodeGenerator {
    constructor() {
        this.urlInput = document.getElementById('urlInput');
        this.generateBtn = document.getElementById('generateBtn');
        this.qrcodeContainer = document.getElementById('qrcode');
        this.errorElement = document.getElementById('error');

        this.init();
    }

    init() {
        this.loadLastUrl();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.generateBtn.addEventListener('click', () => this.generateQRCode());
        this.generateBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                this.generateQRCode();
            }
        });

        this.urlInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.generateQRCode();
            }
        });
    }

    async loadLastUrl() {
        const { lastUrl } = await chrome.storage.local.get('lastUrl');
        if (lastUrl) {
            this.urlInput.value = lastUrl;
            this.generateQRCode();
        }
    }

    async generateQRCode() {
        const url = this.urlInput.value.trim();
        this.errorElement.textContent = '';

        if (!url) {
            this.errorElement.textContent = 'Please enter a URL';
            return;
        }

        try {
            new URL(url);
        } catch {
            this.errorElement.textContent = 'Please enter a valid URL';
            return;
        }

        // Clear previous QR code
        this.qrcodeContainer.innerHTML = '';
        
        // Generate QR code using QRCode.js
        new QRCode(this.qrcodeContainer, {
            text: url,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        await chrome.storage.local.set({ lastUrl: url });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QRCodeGenerator();
}); 