# Butterfly Spanish Website

A modern, responsive website for Butterfly Spanish, showcasing Spanish lessons and connecting with students worldwide. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Butterfly Spanish Website](public/readme-preview.png)

## Features

- 🎥 Dynamic video gallery with YouTube integration
- 📱 Fully responsive design for all devices
- ⚡ Optimized performance with Next.js 14
- 💬 Real-time testimonials from YouTube comments
- 🎨 Modern UI with Tailwind CSS
- 🔒 Type-safe development with TypeScript

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **API**: YouTube Data API v3
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- YouTube Data API key
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/butterfly-spanish.git
cd butterfly-spanish
```

2. Install dependencies:
```bash
pnpm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your YouTube API key:
```env
YOUTUBE_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
pnpm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
butterfly-spanish/
├── app/
│   ├── components/     # Reusable components
│   ├── lib/           # Utility functions and API calls
│   ├── sections/      # Page sections
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── components/        # UI components (shadcn/ui)
```

## Key Components

- **Video Gallery**: Dynamic integration with YouTube playlists
- **Testimonials**: Real-time display of student feedback from YouTube comments
- **Responsive Layout**: Mobile-first design with optimized viewing on all devices
- **Performance Optimized**: Using Next.js Image component and lazy loading

## API Integration

The project uses the YouTube Data API v3 to fetch:
- Video information
- Playlist data
- Channel statistics
- Comments for testimonials



