import React from "react";
import "../styling/browserCollection.css"
export default function PictureForm(props) {
  return (
    <div className="mainCont">
      <div className="cont">
      <h1 className="form-header">{props.picture_name}</h1>
      <img className="images" src={props.image_url} alt="One of my Tumblr cups" />
      <p className ="form-summary">{props.description}</p>
      </div>
    </div>
  );
}
