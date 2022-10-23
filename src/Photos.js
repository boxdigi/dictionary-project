import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="d-flex justify-content-evenly">
          <ul>
            {props.photos.map(function (photo, index) {
              return (
                <li key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img className="img-fluid" alt="pic" src={photo.src.landscape} />
                  </a></li>
              )
            })}</ul></div>
      </section >
    )
  } else { return null }
}