import { useState } from "react";
import { MoviesProvider } from "./Context/MoviesContext"


function App() {

  const [movie, setMovie] = useState([])
  const [searchMovie, setSearchMovie] = useState("")



  return (
    <MoviesProvider>
      <main>


        <div class="mb-3">
          <label for="" class="form-label"></label>
          <input
            type="text"
            placeholder="Cerca il film..."
            value={''}
            onChange={''}
          />
          <button className="mt-3">Cerca</button>



        </div>
      </main>


    </MoviesProvider>
  )
}

export default App
