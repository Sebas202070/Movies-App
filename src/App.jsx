import { useState } from "react";

import "./movie.css";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [pelicula, setPelicula] = useState([]);

  console.log(pelicula);

  const API_KEY = "3d57d00504c06b2f4eba0b20c266aaef";
  const url = `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=${API_KEY}`;

  const fecthPelicula = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPelicula(data.results);
  };
  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };
  console.log(busqueda);

  const handleSubmit = (e) => {
    e.preventDefault();
    fecthPelicula();
    console.log(pelicula);
  };
  console.log(pelicula);
  return (
    <div className="container">
      <h1>Buscador de Peliculas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={busqueda} onChange={handleBusqueda} />
        <button type="submit"></button>
      </form>
      <div className="movie-list">
        {pelicula.map((p) => (
          <div className="movie-card" key={p.id}>
            {/* <h1>{p.title}</h1> */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${p.poster_path}`}
              alt={p.title}
            />
            <h2>{p.title}</h2>
            <p>{p.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
