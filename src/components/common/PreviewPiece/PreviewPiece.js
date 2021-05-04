import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TYPE } from "../../../constants";
import { mixin } from "../../../styles";

const PreviewPiece = ({ type }) => {
  const { MAIN_TYPE } = TYPE;
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={process.env.PUBLIC_URL + "/dummy/22.png"} alt="dummy" />
      </ImageWrapper>
      <PieceInfo>
        <PieceTitle>작품 이름 (한 줄 이상은 말을 줄입니다)</PieceTitle>
      </PieceInfo>
    </Wrapper>
  );
};

export default PreviewPiece;

const Wrapper = styled.div`
  width: 48%;
  min-width: 157px;
  margin-bottom: 18px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 3px;
  img {
    width: 100%;
  }
`;

const PieceTitle = styled.div`
  ${mixin.shorthand}
  max-width: 100%;
  font-weight: bold;
  margin: 5px 0;
`;

const UniversityName = styled.p`
  ${mixin.shorthand}
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.maingray};
`;

const PieceInfo = styled.div`
  padding: 0 9px;
`;
