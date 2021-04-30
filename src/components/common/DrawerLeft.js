import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "../Drawer";
import menu from "../../static/icons/menu.svg";
import searchIcon from "../../static/icons/btn-search-enter.svg";
import alarmIcon from "../../static/icons/btn-alarm.svg";

const DrawerLeft = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const showDrawer = () => setVisibleDrawer(true);
  const hideDrawer = () => setVisibleDrawer(false);

  return (
    <Header>
      <HamburgerIcon src={menu} alt="메뉴바" onClick={showDrawer} />
      {visibleDrawer && <Drawer hideDrawer={hideDrawer} />}
      <TitleToMain>DDAMI</TitleToMain>
      <LinkToSearch to="/search">
        <SearchIcon src={searchIcon} alt="검색" />
      </LinkToSearch>
      <LinkToAlarm to="/">
        <AlarmIcon src={alarmIcon} alt="검색" />
      </LinkToAlarm>
    </Header>
  );
};

export default DrawerLeft;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 22px 16px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HamburgerIcon = styled.img`
  width: 18px;
  height: 16px;
  margin-right: 27px;
`;

const TitleToMain = styled(Link)`
  width: 218.38px;
  font-size: 18px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkgray};
`;

const LinkToSearch = styled(Link)`
  margin-left: auto;
`;

const LinkToAlarm = styled(Link)`
  margin: 0 2px 0 21px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const AlarmIcon = styled.img`
  width: 18px;
  height: 21px;
`;
