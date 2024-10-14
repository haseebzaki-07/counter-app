import React, { useState } from 'react';
import './SpotifyPlayer.css'; // Import the CSS file

const SpotifyPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="spotify-player-container"
      onMouseEnter={() => setIsHovered(true)}  // Show player on hover
      onMouseLeave={() => setIsHovered(false)} // Hide player when not hovering
    >
      {/* Spotify Icon */}
      <div className="spotify-icon">
        {/* Use an image or icon for Spotify symbol */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" 
          alt="Spotify Icon"
        />
      </div>

      {/* Spotify Player */}
      <iframe
        className={`spotify-iframe ${isHovered ? 'visible' : ''}`}  // Add 'visible' class on hover
        src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
