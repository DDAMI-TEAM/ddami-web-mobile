import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 121px;
  padding: 27px;
  line-height: 36px;
`;

const SubText = styled.div`
  font-size: 16px;
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const DownloadButton = styled.button`
  position: absolute;
  bottom: 35px;
  right: 0;
  margin-right: 27px;
  padding: 0 15px;
  background: ${({ theme }) => theme.background.main};
  border-radius: ${({ theme }) => theme.radius.main};
  color: ${({ theme }) => theme.colors.white};
`;

const MainBanner = () => {
  return (
    <BannerWrapper>
      <SubText>전국 n명의 미대생을 위한</SubText>
      <MainText>DDAMI</MainText>
      <DownloadButton>앱 다운로드</DownloadButton>
    </BannerWrapper>
  );
};

export default MainBanner;
