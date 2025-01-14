# WhatsApp Chat Backup - Installation Manual Generator

A NativeScript mobile application built with TypeScript that generates installation manuals for the WhatsApp Chat Backup App.

## Core Purpose

This application serves as a tool to generate comprehensive PDF installation manuals for the WhatsApp Chat Backup App. The generated manuals provide step-by-step instructions for users to properly install and configure the backup solution.

## Technical Stack

- NativeScript framework (v8.8.0)
- TypeScript
- TailwindCSS for styling
- PDF Generation via nativescript-pdf-generation
- File system integration for PDF storage
- Image picker integration for manual customization

## Key Features

- **PDF Manual Generation**
  - Creates structured installation guides
  - Supports formatted HTML content
  - Customizable manual sections
  - Professional PDF output

- **File Management**
  - Saves PDFs to device's documents folder
  - File picking capabilities
  - Image integration support

- **User Experience**
  - Real-time generation status updates
  - Responsive UI with TailwindCSS
  - Intuitive navigation
  - Progress indicators

## Project Structure

The application follows the MVVM (Model-View-ViewModel) pattern:
- `app/viewmodels/` - Contains ManualViewModel and other view models
- `app/views/` - XML-based UI definitions
- `app/models/` - Data models and interfaces
- `app/services/` - PDF generation and file system services

## Prerequisites

- Node.js (Latest LTS version)
- NativeScript CLI (`npm install -g nativescript`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Run the app on an emulator or device:

```bash
ns run android
or
ns run ios
```

## Development

The project uses several key dependencies:
- `@nativescript/core`: ^8.8.0
- `nativescript-pdf-generation`: ^1.7.1
- `@nativescript/file-picker`: ^5.0.0
- `@nativescript/imagepicker`: ^1.0.0

Development tools:
- `@nativescript/tailwind`: ^2.1.0
- `typescript`: ~5.4.0
- `tailwindcss`: ~3.4.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Developer

**Pieter Keuzenkamp**
- Website: [https://www.pieterkeuzenkamp.nl](https://www.pieterkeuzenkamp.nl)
- Email: [info@pieterkeuzenkamp.nl](mailto:info@pieterkeuzenkamp.nl)
- Role: Freelance Software Developer

## Support

For support, please:
1. Open an issue in the repository
2. Contact the developer at [info@pieterkeuzenkamp.nl](mailto:info@pieterkeuzenkamp.nl)
3. Visit [https://www.pieterkeuzenkamp.nl](https://www.pieterkeuzenkamp.nl) for more information

## Acknowledgments

- NativeScript community
- Contributors to the nativescript-pdf-generation plugin
- WhatsApp Chat Backup App team