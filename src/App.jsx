import { useState } from "react";
import { MoviesProvider } from "./Context/MoviesContext"


function App() {

  const [tasks, setTasks] = useState("")
  const [movie, setMovie] = useState([])
  const [serieTv, setSerieTv] = useState([])



  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=123ca39c538b7ebadb458701979d7a72&query=${tasks}`)
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=123ca39c538b7ebadb458701979d7a72&language=it_IT&query=${tasks}`)
      .then(res => res.json())
      .then((data) => {
        setMovie(data.res || []);
      })
      .then(res => res.json())
      .then((data) => {
        setSerieTv(data.res || []);
      })
  };



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
            <ul className="list-unstyled">
              {movie.map((film) => (
                <li key={film.id}>
                  <h5><strong>Titolo:{film.title}</strong></h5>
                  <p><strong>Titolo Originale:{film.original_title}</strong></p>
                  <p><strong>Lingua:</strong><img src={`https://flagcdn.com/24x18/${film.original_language}.png`}
                    alt={film.original_language} /></p>
                  <p><strong>Voto:{film.vote_average}</strong></p>
                </li>
              ))}
            </ul>
            <ul className="list-unstyled">
              {serieTv.map((serie) => (
                <li key={serie.id}>
                  <h5><strong>Titolo:{serie.title}</strong></h5>
                  <p><strong>Titolo Originale:{serie.original_title}</strong></p>
                  <p><strong>Lingua:</strong><img src={`https://flagcdn.com/24x18/${serie.original_language}.png`}
                    alt={serie.original_language} /></p>
                  <p><strong>Voto:{serie.vote_average}</strong></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </MoviesProvider>
  )
}

export default App
