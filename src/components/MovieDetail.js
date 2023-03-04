import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import "./MovieDetail.css"
const MovieDetail = () => {
  const {id}=useParams();
  
  
  const [detailed, SetDetailed] = useState([]);  
 

  const api=`https://api.themoviedb.org/3/movie/${id}?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US`
  useEffect(() => {
    fetch(api)
    .then((response) => response.json())
    .then((actualData) =>SetDetailed(actualData))
    ;
  
  },[]);

  return (
    <div>
     <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${detailed ? detailed.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${detailed ? detailed.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{detailed ? detailed.original_title : ""}</div>
                        <div className="movie__tagline">{detailed ? detailed.tagline : ""}</div>
                        <div className="movie__rating">
                            {detailed ? detailed.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{detailed ? "(" + detailed.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{detailed ? detailed.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{detailed ? "Release date: " + detailed.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                detailed && detailed.genres
                                ? 
                                detailed.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{detailed ? detailed.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    detailed && detailed.homepage && <a href={detailed.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    detailed && detailed.imdb_id && <a href={"https://www.imdb.com/title/" + detailed.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    detailed && detailed.production_companies && detailed.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default MovieDetail;
