import React, { useState, useEffect } from "react";
import "../../styling/slider.css";
export default function ImageSlider({ slides }) {
  const [picture, setPicture] = useState([]);
  const [counter, setCounter] = useState(0);

  const [cupPic, setCupPic] = useState(
    "http://127.0.0.1:8000/media/posts/image2.jpg"
  );
  const url = "http://127.0.0.1:8000/api/pictures/";

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(
      url,
      { signal: abortCont.signal },
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setPicture(resp))

      .catch((error) => console.log(error));
    return () => abortCont.abort();
  }, []);
  const go_through = () => {
    if (counter >= picture.length - 1) {
    } else {
      setCounter(counter + 1);
      setCupPic(picture[counter].image);
    }
  };

  const prev = () => {
    if (counter < 0) {
    } else {
      if (counter === 0) {
        setCounter(0);
      } else {
        setCounter(counter - 1);
      }

      setCupPic(picture[counter].image);
    }
  };

  return (
    <div className="slider">
      <div className="image-cont">
        {<img className="image" src={cupPic} alt="One of many Tumblr cups" />}
      </div>
      <div className="slider-button-cont">
        <button
          className="slider-buttons"
          style={{ width: "100px", height: "25px" }}
          onClick={() => go_through()}
        >
          {" "}
          Next
        </button>

        <button
          className="slider-buttons"
          style={{ width: "100px", height: "25px" }}
          onClick={() => prev()}
        >
          {" "}
          Previous
        </button>
      </div>
    </div>
  );
}
