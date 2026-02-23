import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// --- DATA STRUCTURE ---
// An array of objects representing albums
const albums = [
  {
    id: 1,
    title: 'The Money Store',
    artist: 'Death Grips',
    year: 2012,
    genre: 'Experimental Hip-Hop',
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Modal Soul',
    artist: 'Nujabes',
    year: 2005,
    genre: 'Hip-Hop/Jazz',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Teens of Style',
    artist: 'Car Seat Headrest',
    year: 2015,
    genre: 'Indie Rock',
    isFavorite: true,
  },
  {
    id: 4,
    title: 'DIM',
    artist: 'the GazettE',
    year: 2009,
    genre: 'Rock/Visual Kei',
    isFavorite: true,
  },
];

// --- COMPONENT 1: AlbumShelf ---
// Uses the albums array above and .map() to display each album as a list item
function AlbumShelf() {
  const albumList = albums.map(album =>
    <li key={album.id} className="album-item">
      <strong>{album.title}</strong> — {album.artist} ({album.year})
      <span className="genre-tag">{album.genre}</span>
      {/* Only show star if isFavorite is true */}
      {album.isFavorite && <span className="fav-star">⭐ Favorite</span>}
    </li>
  );

  return (
    <div className="album-shelf">
      <h2>My Album Shelf... ♪（ｖ＾＿＾）ｖ</h2>
      <ul>{albumList}</ul>
    </div>
  );
}

// --- COMPONENT 2: NowPlaying ---
// Accepts a `song` prop and an `isPlaying` prop
function NowPlaying({ song, isPlaying }) {
  return (
    <div className="now-playing">
      {/* If isPlaying is true, show the song, otherwise show a message */}
      {isPlaying ? (
        <p>𖦹 Now Playing: <strong>{song}</strong></p>
      ) : (
        <p>⏸ Nothing playing right now.</p>
      )}
    </div>
  );
}

// --- COMPONENT 3: Footer ---
// A simple footer component
function Footer() {
  return (
    <footer className="site-footer">
      <p>Built with React + Vite ♪ by Tess</p>
    </footer>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  const [count, setCount] = useState(0)

  // Controls whether NowPlaying shows a song or not
  const isPlaying = true;
  const currentSong = 'Hacker — Death Grips';

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <h2>Hi, it's me Tess!</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <NowPlaying song={currentSong} isPlaying={isPlaying} />
      <AlbumShelf />
      <Footer />
    </>
  )
}

export default App