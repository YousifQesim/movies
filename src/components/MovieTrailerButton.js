import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieTrailerButton() {
  const [trailerUrl, setTrailerUrl] = useState('');
  const {id}=useParams();
const API_KEY='e7b12004b75308c7c4a6e84c00d2477e'
  const handleButtonClick = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      const trailerKey = data.results.find((result) => result.type === 'Trailer')?.key;
    if (trailerKey) {
      setTrailerUrl(`https://www.youtube.com/embed/${trailerKey}`);
    }
  };
  useEffect(() => {
    handleButtonClick();
  }, []);

  return (
    <>
      {trailerUrl && (
        <iframe
        className='youtube1   '
          title="Movie Trailer"
        width="500"
          height="315"
          src={trailerUrl}
          frameBorder="0"
          allowFullScreen
        />
      )}
    </>
  );
}
export default MovieTrailerButton;