import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 8) {
          return (
            <div className="index-definition" key={index}>
              <span className="definition"><i className="fa-solid fa-bookmark"></i> {definition.definition}</span>
              <br />
              <Example example={definition.example} />
            </div>
          )
        } else { return null }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  )
}