import { useState } from "react";
import { MoviesProvider } from "./Context/MoviesContext"


function App() {

  const [tasks, setTasks] = useState("")
  const [movie, setMovie] = useState([])

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=123ca39c538b7ebadb458701979d7a72&query=${tasks}`)
      .then(res => res.json())
      .then((data) => {
        setMovie(data.results || []);
      })

  };



  return (
    <MoviesProvider>
      <main>
        <div className="mb-3">
          <label htmlFor="" className="form-label"></label>
          <input
            type="text"
            placeholder="Cerca il film..."
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
          <button className="mt-3" onClick={handleSearch}>Cerca</button>
          <div>
            <ul>
              {movie.map((film) => (
                <li key={film.id}>
                  <h3>{film.title}</h3>
                  <p>Titolo Originale:{film.original_title}</p>
                  <p>Lingua:{film.original_language}</p>
                  <p>Voto:{film.vote_average}</p>
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
