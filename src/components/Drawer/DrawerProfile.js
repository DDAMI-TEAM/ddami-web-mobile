import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mixin } from "../../styles";

export default () => {
  return (
    <Wrapper>
      <ProfileImage />
      <Name>김따미</Name>
      <Major>시각디자인학과</Major>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${mixin.flex()}
  ${mixin.flexColumn}
  position: relative;
  margin: 16px 0 40px 0;
`;

const ProfileImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.shadow.image};
`;

const Name = styled.span`
  margin: 18px 0;
  font-size: 18px;
  font-weight: 600;
`;

const Major = styled.span`
  color: ${({ theme }) => theme.colors.gray};
`;
