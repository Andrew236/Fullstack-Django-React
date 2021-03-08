import React, { useState } from "react";
import useAxios from "axios-hooks";
export default function Try() {
  const [name, setName] = useState("Andy");
  const [style, setStyle] = useState("f");
  const [email, setEmail] = useState("JoshEvans@gmail.com");
  const [powerwashed, setPowerwashed] = useState(false)
  const [summary, setSummary] = useState(
    "I basically want a cup that is has blue and green coloring on it. I also want the cup to be purple and have a lot of colors"
  );

  const axios = require("axios");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, style, email, summary);
    await axios
      .post("http://127.0.0.1:8000/contacts/postings/", {
        name,
        email,
        style,
        powerwashed,
        summary,
      })
      .then(async (resp) => {
        await axios
          .post(
            `http://127.0.0.1:8000/contacts/postings/${resp.data.id}/send_form/`,
            {
              name,
              email,
              style,
              powerwashed,
              summary,
            }
          )
          .then((resp) => {
            console.log(resp);
          });
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      hi
      <form onSubmit={submitHandler}>
        <div></div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
