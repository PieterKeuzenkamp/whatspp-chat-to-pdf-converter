import { Observable } from '@nativescript/core';
import { PDFGenerator } from 'nativescript-pdf-generation';
import { knownFolders } from '@nativescript/core';

export class ManualViewModel extends Observable {
    private _status: string = '';

    constructor() {
        super();
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        if (this._status !== value) {
            this._status = value;
            this.notifyPropertyChange('status', value);
        }
    }

    async generateManual() {
        try {
            this.status = 'Generating PDF...';
            
            const htmlContent = `
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        h1 { color: #2c3e50; }
                        h2 { color: #34495e; margin-top: 20px; }
                        .step { margin-bottom: 15px; }
                        code { background: #f8f9fa; padding: 2px 5px; border-radius: 3px; }
                        .highlight { color: #2ecc71; font-weight: bold; }
                        .intro { background: #f1f8ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
                    </style>
                </head>
                <body>
                    <h1>WhatsApp Chat Backup Tool</h1>
                    
                    <div class="intro">
                        <h2>About This App</h2>
                        <p>This application is specifically designed for WhatsApp users who want to create comprehensive PDF backups of their chat conversations. Key features include:</p>
                        <ul>
                            <li>Complete chat history backup to PDF format</li>
                            <li>Preservation of media attachments (images, documents)</li>
                            <li>Video thumbnail integration</li>
                            <li>Embedded links preservation</li>
                            <li>Chronological organization of all content</li>
                        </ul>
                    </div>

                    <h2>1. Prerequisites</h2>
                    <div class="step">
                        <p><span class="highlight">Important:</span> This app requires access to WhatsApp data on your device.</p>
                        For installation, you'll need:<br>
                        • Android device with WhatsApp installed<br>
                        • Storage permission for accessing WhatsApp data<br>
                        • Sufficient storage space for PDF generation
                    </div>

                    <h2>2. Installation on Android</h2>
                    <div class="step">
                        1. Enable "Install from Unknown Sources" in Android Settings<br>
                        2. Download the APK file to your device<br>
                        3. Tap the APK file to begin installation<br>
                        4. Follow the installation prompts<br>
                        5. Grant necessary permissions when requested
                    </div>

                    <h2>3. Using the App</h2>
                    <div class="step">
                        1. Open the WhatsApp Chat Backup Tool<br>
                        2. Select the WhatsApp chat you want to backup<br>
                        3. Choose which media types to include<br>
                        4. Generate your PDF backup<br>
                        5. Access your backup in your device's Documents folder
                    </div>

                    <h2>4. Privacy & Security</h2>
                    <div class="step">
                        • This app operates locally on your device<br>
                        • No data is sent to external servers<br>
                        • Backups are stored securely on your device<br>
                        • We recommend keeping your backups private
                    </div>

                    <h2>For Developers</h2>
                    <div class="step">
                        If you're a developer looking to build the app from source:<br><br>
                        
                        <strong>Development Requirements:</strong><br>
                        • Node.js (LTS version)<br>
                        • Java Development Kit (JDK) 11 or later<br>
                        • Android Studio and Android SDK<br>
                        • NativeScript CLI<br><br>
                        
                        <strong>Build Steps:</strong><br>
                        1. Clone the repository<br>
                        2. Install dependencies: <code>npm install</code><br>
                        3. Build APK: <code>ns build android --release</code>
                    </div>
                </body>
                </html>
            `;

            const documents = knownFolders.documents();
            const pdfPath = documents.path + '/whatsapp-backup-tool-manual.pdf';
            
            await PDFGenerator.generate({
                html: htmlContent,
                fileName: pdfPath,
                paperSize: 'A4'
            });

            this.status = `WhatsApp Backup Tool manual saved to:\n${pdfPath}`;
        } catch (error) {
            this.status = 'Error generating PDF: ' + error.message;
            console.error(error);
        }
    }
}