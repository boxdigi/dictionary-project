import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <div><span className="main">Synonyms: </span>
          {props.synonyms.map(function (synonym, index) {
            return (
              <span className="list-synonym" key={index}>{synonym}</span>
            )
          })}
        </div>
      </div>
    )
  } else {
    return null
  }
}