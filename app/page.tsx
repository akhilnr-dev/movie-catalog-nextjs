'use client'

import { useState, useMemo } from 'react'
import { movies, Movie } from '../data/movies'

// Validate movies data on import
if (!movies || !Array.isArray(movies)) {
  throw new Error('Movies data is not properly loaded')
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [sortBy, setSortBy] = useState('title')

  // Get unique genres for filter
  const genres = useMemo(() => {
    const allGenres = movies.flatMap(movie => movie.genre)
    return [...new Set(allGenres)].sort()
  }, [])

  // Filter and sort movies
  const filteredMovies = useMemo(() => {
    let filtered = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesGenre = selectedGenre === '' || movie.genre.includes(selectedGenre)

      return matchesSearch && matchesGenre
    })

    // Sort movies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year
        case 'rating':
          return b.rating - a.rating
        case 'title':
        default:
          return a.title.localeCompare(b.title)
      }
    })

    return filtered
  }, [searchTerm, selectedGenre, sortBy])

  return (
    <div className="container">
      <header className="header">
        <h1>🎬 Movie Catalog</h1>
        <p>Discover and explore our collection of {movies.length} classic films</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies, directors, or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="filter-select"
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {filteredMovies.length === 0 ? (
        <div className="no-results">
          No movies found matching your criteria. Try adjusting your search or filters.
        </div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="movie-thumbnail"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-meta">
          <span>{movie.year} • {movie.duration} min</span>
          <span className="movie-rating">★ {movie.rating}</span>
        </div>

        <div className="movie-genres">
          {movie.genre.map(genre => (
            <span key={genre} className="genre-tag">{genre}</span>
          ))}
        </div>

        <p className="movie-description">{movie.description}</p>

        <div className="movie-director">
          Directed by {movie.director}
        </div>
      </div>
    </div>
  )
}
