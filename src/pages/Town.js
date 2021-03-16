import React from "react";
import MainBanner from "../components/main/MainBanner";
import Header from "../components/ddamitown/Header";
import FilterList from "../components/ddamitown/FilterList";
import PieceList from "../components/ddamitown/PieceList";

const TownPage = () => {
  return (
    <>
      <MainBanner />
      <Header />
      <FilterList />
      <PieceList />
    </>
  );
};

export default TownPage;
