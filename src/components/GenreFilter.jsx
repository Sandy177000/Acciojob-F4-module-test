import React from "react";

function GenreFilter({filters}) {
  return (
    <div className="flex bg-[#f2f2f2] w-full p-3 gap-2 flex-col">
      <p>Filter By Genre</p>
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <div key={filter} className="flex p-2 bg-gray-300 items-center justify-center rounded-md cursor-pointer hover:bg-gray-400" onClick={()=> console.log('Filtering by ' +filter)}>
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
