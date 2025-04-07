import { useState } from "react";
import { MoviesProvider } from "./Context/MoviesContext";



function App() {

  const [tasks, setTasks] = useState("")
  const [movie, setMovie] = useState([])
  const [serieTv, setSerieTv] = useState([])

  const stelle = [];



  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=123ca39c538b7ebadb458701979d7a72&query=${tasks}`)
      .then(res => res.json())
      .then((data) => {
        setMovie(data.results || []);
      })
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=123ca39c538b7ebadb458701979d7a72&language=it_IT&query=${tasks}`)
      .then(res => res.json())
      .then((data) => {
        setSerieTv(data.results || []);
      })
  };


  const numero = (voto) => {
    return Math.ceil(voto / 2);


  };

  for (let i = 0; i < numero(10); i++) {
    stelle.push();
  }
  console.log(stelle);



  return (
    <MoviesProvider>
      <main>

        <div className="mb-3">
          <label htmlFor="" className="form-label"></label>
          <input
            type="text"
            placeholder="Cerca cosa guardare..."
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
          <button className="mt-3" onClick={handleSearch}>Cerca</button>
          <div>

            <div className="container">
              <div className="row">

                {movie.map((film) => (
                  <div className="card_film col-3 m-3 card" key={film.id}>
                    <img src={`http://image.tmdb.org/t/p/w1920/${film.poster_path}`} className="image_copertina card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Titolo:{film.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">Titolo Originale:{film.original_title}</h6>
                      <p className="card-text">Lingua:<img src={`https://flagcdn.com/24x18/${film.original_language}.png`}
                        alt={film.original_language} /></p>
                      <p>Voto:{film.vote_average}</p>
                    </div>
                  </div>
                ))}

                {serieTv.map((serie) => (
                  <div className="card_film col-3 card" key={serie.id}>
                    <img src={`http://image.tmdb.org/t/p/w1920/${serie.poster_path}`} className="image_copertina card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Titolo:{serie.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">Titolo Originale:{serie.original_title}</h6>
                      <p className="card-text">Lingua:<img src={`https://flagcdn.com/24x18/${serie.original_language}.png`}
                        alt={serie.original_language} /></p>
                      <p>Voto:{serie.stelle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </MoviesProvider>
  )
}

export default App
