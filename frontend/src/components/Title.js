import React from "react";
import SearchBar from "./SearchBar";

const Title = ({ title, withSearch, search, setSearch }) => {
  return (
    <div className="m-4 ">
      <div className="bg-third rounded text-white text-center p-2 ">
        {title}
      </div>
      {withSearch? <SearchBar search={search} setSearch={setSearch}/> : ''}
    </div>
  );
};

export default Title;
