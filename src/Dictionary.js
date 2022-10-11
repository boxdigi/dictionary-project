import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching ${keyword}...`)
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <h2>hello from Dictionary</h2>

      <form onSubmit={search}>
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Enter a word..." onChange={handleKeyword} />
          <button
            type="submit"
            className="search btn border btn-light text-muted">
            <i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
    </div>
  )
};