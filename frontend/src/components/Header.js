import React from "react";
import "../styling/header.css";
export default function Header(props) {
  return (
    <div
      style={
        props.subtitle
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: "100%",
              flexDirection: "column",
              lineHeight: "0%",
              marginTop: "5%",
              whiteSpace: "wrap",
            }
          : {}
      }
    >
      <h1 className="header">{props.title ? props.title : null} </h1>
      <h2 className="header2"> {props.subtitle ? props.subtitle : null}</h2>
      {/* <p className="description-paragraph">
        {props.summary_paragraph ? props.summary_paragraph : null}
      </p> */}
    </div>
  );
}
