import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TYPE } from "../../../constants";
import { mixin } from "../../../styles";

const PreviewArticle = ({ type }) => {
  const { MAIN_TYPE } = TYPE;
  return (
    <Wrapper>
      <Link to="/detail/1">
        <ImageWrapper>
          <img src={process.env.PUBLIC_URL + "/dummy/22.png"} alt="dummy" />
        </ImageWrapper>
      </Link>
      <ProductName>작품 이름 (한 줄 이상은 말을 줄입니다)</ProductName>
      {type === MAIN_TYPE.SHOP && (
        <>
          <UniversityName>대학교 이름</UniversityName>
          <Price>15,000원</Price>
          {/* TODO : 조회수, 좋아요 */}
        </>
      )}
      {type === TYPE.MAIN_TYPE.TOWN && <>{/* TODO : 작가 이름 */}</>}
    </Wrapper>
  );
};

export default PreviewArticle;

const Wrapper = styled.div`
  width: 48%;
  margin-bottom: 18px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 3px;
  img {
    width: 100%;
  }
`;

const ProductName = styled.div`
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

const Price = styled.p`
  margin-bottom: 7px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.purple2};
`;
