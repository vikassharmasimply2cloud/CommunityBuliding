# CommunityHub

## Overview

CommunityHub is a full-stack web application that helps people discover and connect with local communities based on shared interests. The platform allows users to browse, search, and filter community groups across various categories like sports, arts, hobbies, and professional networks. Built as a React single-page application with an Express.js backend, it provides a comprehensive community discovery experience with detailed community profiles, search functionality, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing with support for parameterized routes
- **State Management**: TanStack Query (React Query) for server state management, caching, and data fetching
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **Storage**: Currently using in-memory storage with mock data, structured to easily migrate to database storage
- **API Design**: RESTful endpoints for communities with search, filtering, and individual community retrieval

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