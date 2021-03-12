import React from "react";
import MainBanner from "../components/main/MainBanner";
import Header from "../components/ddamitown/Header";
import FilterList from "../components/ddamitown/FilterList";
import PieceList from "../components/ddamitown/PieceList";
import Modal from "../components/common/filterModal";
// import { TYPE } from "../constants";

const TownPage = () => {
  return (
    <>
      <MainBanner />
      <Header />
      <FilterList />
      <PieceList />
      <Modal />
    </>
  );
};

export default TownPage;
