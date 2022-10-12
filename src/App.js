import React from "react";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <header>
        <h1><i class="fa-solid fa-book-open"></i> Dictionary</h1>
        <p>you can find a definition of the word, similar words and illustration</p>
      </header>
      <Dictionary />
      <footer>
        <p>coded by {" "}
          <a href="https://teal-speculoos-2e6228.netlify.app/" target="_blank" rel="noreferrer">Hanna</a> and is {" "}
          <a href="https://github.com/boxdigi/dictionary-project" target="_blank" rel="noreferrer">
            open-sourced</a></p>
        <p>used <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">Dictionary</a></p>
      </footer>

    </div>
  );
}
