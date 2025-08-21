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

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **State Management**: Local React state with useMemo for efficient filtering and search
- **Styling**: Tailwind CSS with Radix UI component library for consistent, accessible UI components
- **Build Tool**: Vite for fast development and optimized production builds
- **Dark Mode**: CSS custom properties with localStorage persistence and system preference detection
- **Data**: Mock community data structured for easy migration to backend API
- **Deployment**: Optimized for static hosting on Vercel with zero configuration

### Data Storage Solutions
- **Current**: In-memory storage with mock community data for development
- **Configured**: Drizzle ORM with PostgreSQL schema definitions ready for production database
- **Database Schema**: Includes users and communities tables with proper relationships and constraints
- **Migration Ready**: Drizzle configuration points to shared schema for easy database deployment

### Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Prepared Structure**: User table with username/password fields ready for authentication implementation
- **Session Management**: Package includes connect-pg-simple for PostgreSQL session storage when needed

### External Dependencies
- **Database**: Neon Database serverless PostgreSQL (configured but not yet active)
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, Geist Mono, DM Sans, others)
- **Development**: Replit-specific tooling for development environment integration
- **Validation**: Zod for runtime type validation and schema definitions

The architecture follows a monorepo pattern with client, server, and shared code organization, making it easy to maintain type consistency across the full stack while keeping concerns properly separated.