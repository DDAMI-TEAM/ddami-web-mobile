import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import WorkplacePage from "./WorkplacePage";
import Search from "../components/search/Search";
import Like from "./Like";
import Purchase from "../components/hamburger/Purchase";
import Subscribe from "../components/hamburger/Subscribe";
import Setting from "../components/hamburger/Setting";
import Footer from "../components/common/Footer";
import DdamiShop from "../components/ddamishop/DdamiShop";
import DdamiTown from "../pages/Town";
import Detail from "../components/ddamishop/Detail";
import Nav from "../components/common/DrawerLeft";
import Join from "../components/user/Join";

export default (props) => (
  <>
    <Nav />
    <Route exact path="/" component={Main} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/town" component={DdamiTown} />
    <Route path="/shop" component={DdamiShop} />
    <Route path="/workplace" component={WorkplacePage} />
    <Route path="/detail" component={Detail} />
    <Route path="/search" component={Search} />
    <Route path="/like" component={Like} />
    <Route path="/purchase" component={Purchase} />
    <Route path="/subscribe" component={Subscribe} />
    <Route path="/setting" component={Setting} />
    <Footer />
  </>
);
