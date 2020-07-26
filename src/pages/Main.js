import React from "react";
import { Route } from "react-router-dom";
import NavbarTemp from "../components/Navbar-temp";
import Navbar from "../components/common/navigation/Navbar";

function Main() {
    return(
      <>
        <Route exact path='/' component={Navbar}/>
      </>
    );
}

export default Main;