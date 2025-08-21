# CommunityHub

## Overview

CommunityHub is a React-based community directory application that helps people discover and connect with local communities based on shared interests. The platform allows users to browse, search, and filter community groups across various categories like sports, arts, hobbies, and professional networks. Built as a frontend-only single-page application optimized for Vercel deployment, it provides a comprehensive community discovery experience with detailed community profiles, search functionality, responsive design, and dark mode support.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 21, 2025)

✓ Created complete frontend-only version for Vercel deployment
✓ Built React application with TypeScript and Vite
✓ Implemented search and filtering functionality with mock data
✓ Added dark mode support with system preference detection
✓ Created responsive design using Tailwind CSS
✓ Integrated Radix UI components for accessibility
✓ Added community detail modal with contact information
✓ Optimized build configuration for production deployment
✓ Cleaned repository structure - removed server files and old client folder
✓ Moved frontend to root level for proper Vercel deployment detection
✓ Added vercel.json configuration for single-page application routing
✓ Fixed import path aliases to use relative paths for Vercel compatibility
✓ Resolved blank page issue by updating UI component imports

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **State Management**: Local React state with useMemo for efficient filtering and search
- **Styling**: Tailwind CSS with Radix UI component library for consistent, accessible UI components
- **Build Tool**: Vite for fast development and optimized production builds
- **Dark Mode**: CSS custom properties with localStorage persistence and system preference detection
- **Data**: Mock community data structured for easy migration to backend API
- **Deployment**: Optimized for static hosting on Vercel with zero configuration

### Data Management
- **Current**: Mock community data stored in frontend for demonstration
- **Structure**: TypeScript interfaces matching real-world community data
- **Future**: Ready for integration with backend API or headless CMS

### External Dependencies
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter family)
- **Styling**: Tailwind CSS with custom color scheme and dark mode
- **Build Tools**: Vite with TypeScript and React plugins
- **Utilities**: Class Variance Authority for component variants

The architecture is now a clean frontend-only application optimized for static deployment, with all community data self-contained and ready for Vercel deployment.