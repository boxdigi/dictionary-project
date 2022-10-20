import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse, function () {
      alert("😨 Oops, we coudn't found the requested word. Please try again or ask Google");
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  };

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="search" className="form-control"
              placeholder="Enter a word..."
              defaultValue={props.defaultKeyword}
              onChange={handleKeyword}
            />
            <button
              type="submit"
              className="search btn border btn-light text-muted">
              <i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="hint">
            suggested words: yoga, wine, gift...
          </div>
        </form>
        <Results results={results} />
      </div>
    )
  } else {
    load();
    return "Loading..."
  }
};