import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching ${keyword}...`)
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse)
  }
  function handleResponse(response) {
    console.log(response.data[0]);
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