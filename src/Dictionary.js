import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Phonetic from "./Phonetic";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse, function () {
      alert("😨 Oops, we coudn't found the requested word. Please try again or ask Google");
    });
    const pexelKey = "563492ad6f917000010000013c59b8e3422048228da8aeac56da87f1";
    let headers = { Authorization: `Bearer ${pexelKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
  }

  function handlePexelResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
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
    console.log(response.data);
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
            <span className="input-group-text">
              <i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
          <div className="hint">
            suggested words: yoga, wine, gift...
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <Results results={results} />
          </div>
          <div className="col-6">
            <section>
              <Photos photos={photos} />
            </section>
          </div>
        </div>
      </div>
    )
  } else {
    load();
    return "Loading..."
  }
};