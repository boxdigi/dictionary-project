import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic) {
    return (
      <div>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> Hello from Phonetic </a>
        <br />
        {props.phonetic.text}
      </div>
    )
  } else { return null }
}