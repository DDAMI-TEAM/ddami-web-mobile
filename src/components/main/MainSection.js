import React from "react";
import styled from "styled-components";
import PreviewArticle from "./PreviewArticle";
import { Link } from "react-router-dom";
import { TEXT, TYPE } from "../../constants";

const MainDdamiShop = ({ type = TYPE.MAIN_TYPE.TOWN }) => {
  const { MAIN_TEXT } = TEXT;

  return (
    <Wrapper>
      <Header>
        <Title>{MAIN_TEXT[type].TITLE}</Title>
        <Description>{MAIN_TEXT[type].SUBTEXT}</Description>
        <MoreButton to="/shop/pieces">더보기 ></MoreButton>
      </Header>
      <ArticleWrapper>
        <PreviewArticle type={type} />
        <PreviewArticle type={type} />
        <PreviewArticle type={type} />
        <PreviewArticle type={type} />
      </ArticleWrapper>
    </Wrapper>
  );
};

export default MainDdamiShop;

const Wrapper = styled.div`
  margin-bottom: 6px;
  padding: 26px 16px 10px 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 6px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.maingray};
`;

const MoreButton = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightgray};
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
`;
