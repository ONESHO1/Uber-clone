# <img valign="middle" width="38" height="38" alt="image" src="https://github.com/user-attachments/assets/cb2eea49-2f99-4ca8-a151-ed51174567eb" /> Uber Clone

A mobile application built with React Native that replicates key features of UBER.
This project was a way to dive deeper into React Native, mobile maps, authentication, and backend integration, while also experimenting with state management and modern tooling.

## Tech Stack

- React Native – mobile app framework
- Expo (development build) – required for Google Maps SDK support
- TypeScript – strongly typed development
- Clerk – authentication (email + Google OAuth)
- Neon – serverless PostgreSQL database
- Zustand – state management
- NativeWind – TailwindCSS for React Native
- Google Maps SDK for Android – maps rendering
- Google Places API – autocomplete and location search

## 🔋 Features

- User onboarding flow
- Authentication with Clerk (email/password and Google OAuth)
- Profile management
- Home screen with live location + Google Maps integration
- Search with autocomplete using Google Places API
- Origin and destination selection with markers on the map
- Ride booking flow with ride details
- Ride history view
- State management handled via Zustand
- Optimized for both Android and iOS

Note: Payment integration was not included in this version.

## Quick Start

1. Prerequisites

   Make sure you have the following installed:

   - Node.js
   - npm
   - Git
   - Expo CLI

3. Setup

   Clone the repository:
   ```
   git clone https://github.com/ONESHO1/uber-clone.git
   cd uber-clone
   ```

4. Install dependencies:
   ```
   npm install
   ```


5. Configure environment variables:
   Create a .env file in the project root with the following keys:
   ```
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
   EXPO_PUBLIC_PLACES_API_KEY=your_key_here
   EXPO_PUBLIC_DIRECTIONS_API_KEY=your_key_here
   DATABASE_URL=your_neon_db_url_here
   EXPO_PUBLIC_SERVER_URL=https://your-server-url.dev/
   ```

6. Run the app (development build required for Maps SDK):
   ```
   npx expo run:android
   npx expo run:ios   # for iOS
   ```

## 🚀 Motivation

This project started as a way to practice full-stack mobile development with React Native (Shoutout Javascript Mastery, the 🐐). The original idea was to practice with this app and then create the side project I've been wanting to create for 3 months (I'm Lazy), but that dream died since the required APIs weren’t publicly accessible.

eh, it is what is. Still got to learn react native.
