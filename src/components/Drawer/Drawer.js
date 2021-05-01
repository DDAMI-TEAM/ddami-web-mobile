import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawerProfile from "./DrawerProfile";
import { mixin } from "../../styles";

export default ({ hideDrawer }) => {
  const onClickOutside = ({ target }) => {
    if (target.id === "drawer") return;
    hideDrawer();
  };

  return (
    <DrawerWrapper onClick={onClickOutside}>
      <Drawer id="drawer">
        <DrawerProfile />
        <Divider />
        <Title isFirst={true}>따미마을</Title>
        <LinkTextList>
          <StyledLink to="/workplace/my">내 작업실</StyledLink>
          <StyledLink to="/like">좋아요한 작품</StyledLink>
          <StyledLink>팔로워 팔로잉</StyledLink>
        </LinkTextList>
        <Title>따미샵</Title>
        <LinkTextList>
          <StyledLink>채팅하기</StyledLink>
          <StyledLink to="purchase">판구매 조회</StyledLink>
          <StyledLink>찜한 목록</StyledLink>
        </LinkTextList>
        <Title>알림</Title>
        <Title to="/setting">설정</Title>
      </Drawer>
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.drawer};
  z-index: 7;
`;

const Drawer = styled.div`
  width: 210px;
  height: 100vh;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.drawer};
  transition: width 2s;
`;

const Divider = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.colors.verylightgray};
`;

const Title = styled.h1`
  margin: 32px 0 15px 0;
  margin-top: ${({ isFirst }) => (isFirst ? "38px" : "32px")};
  padding: 0 4px;
  font-size: 18px;
  font-weight: 800;
`;

const LinkTextList = styled.div`
  ${mixin.flexColumn}
  padding: 0 4px;
  font-size: 15px;
`;

const StyledLink = styled(Link)`
  margin: 8px 0;
  text-decoration: none;
  color: #3c3c3c;
`;
