import React from "react";
import MainBanner from "../components/main/MainBanner";
import MainSection from "../components/main/MainSection";
import { TYPE } from "../constants";

function Main() {
  const { MAIN_TYPE } = TYPE;
  return (
    <>
      <MainBanner />
      <MainSection type={MAIN_TYPE.TOWN} />
      <MainSection type={MAIN_TYPE.SHOP} />
    </>
  );
}

export default Main;
