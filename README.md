# Movie Catalog

A simple Next.js movie catalog SPA featuring 50 classic movies with metadata and thumbnails.

## Features

- Browse 50 curated movies with ratings, genres, and descriptions
- Search functionality across titles, directors, and descriptions
- Filter by genre
- Sort by title, year, or rating
- Responsive design with dark theme
- Static export ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 14
- TypeScript
- CSS3 (no external CSS frameworks)
- Static export configuration

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── data/
│   └── movies.ts       # Movie data and types
├── package.json
├── next.config.js      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```
