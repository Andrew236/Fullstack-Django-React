import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    alignItems:'center',
    alignContent:'center',
    marginBottom: "40px",
  },
  label: {
    // color: "#996666",
    color: "#303030",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "35px",
    fontFamily: "Amatic SC ",
    fontWeight: "bold",
    margin: "40px",
  },

  link: {
    textDecoration: "none ",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      transform: "scale(1.3)",
      color: "green",
    },
  },
});
export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     
     <Link to="/" className={classes.link}>
        <label className={classes.label}>Home</label>
      </Link>
      <Link to="/buy" className={classes.link}>
        <label className={classes.label}>Build Your Own</label>
      </Link>
      <Link to="/browse" className={classes.link}>
        <label className={classes.label}>Gallery</label>
      </Link>
      <Link to="/about" className={classes.link}>
        <label className={classes.label}>About Us</label>
      </Link>
    </div>
  );
}
