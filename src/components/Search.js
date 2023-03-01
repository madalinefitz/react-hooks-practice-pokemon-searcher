import React from "react";

function Search({toggleSearch}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e)=>toggleSearch(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
