import React from "react";
import "../styling/browseButton.css";
import { Link } from "react-router-dom";
export default function BrowseCollectionButton() {
  return (
    <div className="browse-button-container">
      <Link to="/browse">
        <button className="browse-button">Browse Masterpieces</button>
      </Link>
      <Link to="/buy">
        <button className="buy-button">I want one!</button>
      </Link>
    </div>
  );
}
