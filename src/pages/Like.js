import React from "react";
import styled from "styled-components";
import heartIcon from "../static/icons/toggleBtn-like-on.svg";
import { PreviewPiece } from "../components/common";
import { mixin } from "../styles";

const Like = () => {
  return (
    <>
      <PageTitleWrapper>
        <Title>좋아요한 작품 목록</Title>
      </PageTitleWrapper>
      <LikeSection>
        <PreviewPiece></PreviewPiece>
        <PreviewPiece></PreviewPiece>
      </LikeSection>
    </>
  );
};

export default Like;

const PageTitleWrapper = styled.div`
  height: 70px;
  padding: 24px;
  background: ${({ theme }) => theme.background.mainTransparent};
`;

const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  z-index: 3;
  font-weight: 800;
`;

const LikeSection = styled.div`
  height: calc(100vh - 130px);
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  ${mixin.flexGrid}
`;
