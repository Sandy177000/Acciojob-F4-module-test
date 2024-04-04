import { useState } from "react";
import "./App.css";
import GenreFilter from './components/GenreFilter'
import MovieList from "./components/MovieList";
function App() {
  const [count, setCount] = useState(0);

  const filters = [
    "Drama",
    "Crime",
    "Action",
    "Fantasy",
    "Western",
    "Science Fiction",
    "Thriller",
    "War",
    "Animation",
  ];


  return (
    <>
      <div className="flex items-center justify-center flex-col p-5">
        <h1 className="text-[2.5rem] font-bold p-2">Top 15 Movies of All Time</h1>
        <div className="flex flex-col w-[80vw] ">
          <GenreFilter filters={filters}/>
          <MovieList/>
        </div>
      </div>
    </>
  );
}

export default App;
