import React from "react";

function MovieList() {
  const movies = [
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { title: "The Godfather", genre: "Crime", year: 1972 },
    { title: "The Dark Knight", genre: "Action", year: 2008 },
    { title: "12 Angry Men", genre: "Drama", year: 1957 },
    { title: `Schindler's List`, genre: "Drama", year: 1993 },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Fantasy",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", genre: "Western", year: 1966 },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
    },
    { title: "Inception", genre: "Science Fiction", year: 2010 },
    { title: "The Matrix", genre: "Science Fiction", year: 1999 },
    { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
    { title: "Saving Private Ryan", genre: "War", year: 1998 },
    { title: "Jurassic Park", genre: "Science Fiction", year: 1993 },
    {
      title: "Terminator 2: Judgment Day",
      genre: "Science Fiction",
      year: 1991,
    },
    { title: "The Lion King", genre: "Animation", year: 1994 },
  ];
  return (
    <div className="flex w-[80vw] mt-5">
      <table className="w-full text-left border  border-collapse">
        <thead className="bg-[#f2f2f2]">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Genre</th>
            <th className="p-2 border">Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr className="hover:bg-[#f2f2f2]" key={movie.title}>
              <td className="p-2 border">{movie.title}</td>
              <td className="p-2 border">{movie.genre}</td>
              <td className="p-2 border">{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
