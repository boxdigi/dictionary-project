import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="index-definition" key={index}>
            <span className="definition">Definition: {definition.definition}</span>
            <br />
            <Example example={definition.example} />
          </div>
        )
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  )
}