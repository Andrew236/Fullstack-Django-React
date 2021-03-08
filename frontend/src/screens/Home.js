import React from "react";
import ImageSlider from "../components/slider/imageSlider";
import Header from "../components/Header";
import BrowseCollectionButton from "../components/browse-collection";
import Navbar from "../components/Navbar"
export default function Home() {
  const summary =
    "Maverick and Paislee pieces is a small business ownded and operated by \
    Korrianna Baggarley. We make custom tumblers to your liking with \
    glitter/hydro/dipping/alcohol ink... you name it and we can make it. I \
    am a stay at home mom of my two littles and started my business as a \
    hobby. I look forward to creating a tumbler for you! ";
  return (
    <div>
      <Header
        title="Maverick and Paislee"
        subtitle="PIECES"
        
      />
      <Navbar/>
      {/* <ImageSlider /> */}
      {/* <BrowseCollectionButton /> */}
    </div>
  );
}
