# EndGambling - A Gambling Addiction Recovery App

A React Native mobile application designed to help people overcome gambling addiction. Built with Expo and React Native.

## Development Requirements

- Node.js (v18+)
- npm or yarn
- Expo CLI
- Expo Go app installed on an iOS device (for testing without a Mac)

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start` or `npx expo start`
4. Scan the QR code with your iOS device's camera app to open in Expo Go

## Testing on iOS from Windows

This project is set up to be developed on Windows and tested on iOS using Expo Go. You can develop the app on Windows and preview it instantly on an iOS device using the Expo Go app.

1. Make sure your iOS device and development computer are on the same network
2. Run `npm start` to start the Expo development server
3. Scan the QR code with your iOS device's camera
4. The app will open in Expo Go

## Project Structure

```
EndGambling/
├── app/                # Main app screens and navigation (Expo Router)
│   ├── (tabs)/         # Tab-based navigation screens
│   ├── _layout.tsx     # Root layout for navigation
├── assets/             # Images, fonts, and other static assets
├── components/         # Reusable components
├── constants/          # App constants, theme, and configuration
└── hooks/              # Custom React hooks
```

## Features (Planned)

- Progress tracking for addiction recovery
- Daily check-ins and goals
- Support resources and helplines
- Trigger avoidance strategies
- Community support system
