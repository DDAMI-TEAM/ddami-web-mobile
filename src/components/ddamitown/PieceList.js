import React from "react";
import styled from "styled-components";
import PreviewArticle from "../common/PreviewArticle";
import { mixin } from "../../styles";

const PieceList = () => {
  return (
    <Wrapper>
      <PreviewArticle />
      <PreviewArticle />
      <PreviewArticle />
      <PreviewArticle />
      <PreviewArticle />
      <PreviewArticle />
    </Wrapper>
  );
};

export default PieceList;

const Wrapper = styled.div`
  ${mixin.flexGrid}
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;
