import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <h4>Photos</h4>
        <div className="row row-cols-2">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img className="img-fluid" alt="pic" src={photo.src.tiny} />
                </a>
              </div>
            )
          })}</div>
      </section>
    )
  } else { return null }
}