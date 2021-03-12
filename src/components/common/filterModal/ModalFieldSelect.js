import React from "react";
import styled from "styled-components";
import { mixin } from "../../../styles";

const ModalFieldSelect = ({ name = "전체" }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default ModalFieldSelect;

const Wrapper = styled.section`
  ${mixin.flex("center", "center")}
  width: 30%;
  height: 34px;
  min-width: 82px;
  margin-top: 12px;
  margin-right: 14px;
  border-radius: ${({ theme }) => theme.radius.modal};
  border: ${({ theme }) => theme.border.gray};
  color: ${({ theme }) => theme.colors.maingray};
  &:nth-child(3n) {
    margin-right: 0;
  }
`;
