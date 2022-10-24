import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="d-flex justify-content-evenly">
          <ul>
            {props.photos.map(function (photo, index) {
              if (index > 3) {
                return (
                  <li key={index}>
                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                      <img className="img-fluid" alt="pic" src={photo.src.portrait} />
                    </a></li>
                )
              } else { return null }

            })}
          </ul>
        </div>
      </section >
    )
  } else { return null }
}