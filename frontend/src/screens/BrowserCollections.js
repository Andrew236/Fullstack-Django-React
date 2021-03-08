import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PictureForm from "../components/PictureForm";
import "../styling/browserCollection.css";
import Navbar from "../components/Navbar"
export default function BrowserCollections() {
  const [picture, setPicture] = useState([]);
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

  return (
    <div style={{}}>
      <Header className="masterpieces-header" title="Gallery" />
    <Navbar/>
      <div className="mainCont">
        {picture.map((pictures, i) => (
          <PictureForm
            key={i}
            picture_name={pictures.name}
            image_url={pictures.image}
            description={pictures.summary}
          />
        ))}
      </div>
    </div>
  );
}
