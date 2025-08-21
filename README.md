# CommunityHub - Frontend

A React-based community directory application for discovering and connecting with local communities and groups.

## Features

- 🔍 Search and filter communities by name, category, and location
- 🌙 Dark mode support with system preference detection
- 📱 Fully responsive design for all devices
- ♿ Accessible UI components using Radix UI
- 🎨 Modern design with Tailwind CSS
- ⚡ Fast and optimized with Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Deployment

This application is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

For other static hosting services, upload the contents of the `dist` directory after running `npm run build`.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Lucide React (icons)
- Class Variance Authority

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── CommunityCard.tsx
│   ├── SearchFilters.tsx
│   └── ...
├── data/               # Mock data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types.ts            # TypeScript types
└── App.tsx            # Main application component
```

## Customization

### Adding New Communities

Edit `src/data/communities.ts` to add or modify community data.

### Styling

The app uses Tailwind CSS for styling. Modify styles directly in components or extend the Tailwind configuration in `tailwind.config.ts`.

### Dark Mode

Dark mode is implemented using CSS custom properties and can be customized in `src/index.css`.

## License

MIT License