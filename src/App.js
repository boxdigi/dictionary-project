import React from "react";
import './App.css';
import './Components.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <header>
        <h1><i className="fa-solid fa-book-open"></i> Dictionary</h1>
        <p>you can find a definition of the word, similar words and illustration</p>
      </header>
      <p className="instruction"><i className="fa-solid fa-book-open-reader"></i> Please enter a word you want to look up and <em>scroll down</em> the page to see full results <i className="fa-solid fa-book-open-reader"></i><br />
        <i className="fa-regular fa-face-grin"></i> Have fun!</p>
      <Dictionary defaultKeyword="coffee" />
      <footer>
        <p>coded by {" "}
          <a href="https://teal-speculoos-2e6228.netlify.app/" target="_blank" rel="noreferrer">Hanna</a> and is {" "}
          <a href="https://github.com/boxdigi/dictionary-project" target="_blank" rel="noreferrer">
            open-sourced</a>; <br />used <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">Dictionary</a> & <a href="http://www.pexels.com" target="_blank" rel="noreferrer">Pexels photo</a>
        </p>
      </footer>
    </div>
  );
}
