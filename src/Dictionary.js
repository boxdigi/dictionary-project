import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="input-group px-5 py-3">
          <input type="search" className="form-control" placeholder="Enter a word..." onChange={handleKeyword} />
          <button
            type="submit"
            className="search btn border btn-light text-muted">
            <i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
      <Results results={results} />
    </div>
  )
};