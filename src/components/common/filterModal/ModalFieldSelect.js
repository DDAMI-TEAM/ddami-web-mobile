import React from "react";
import styled from "styled-components";
import { mixin } from "../../../styles";

const ModalFieldSelect = ({ value = "전체" }) => {
  return <Wrapper>{value}</Wrapper>;
};

export default ModalFieldSelect;

const Wrapper = styled.section`
  ${mixin.flex("center", "center")}
  width: 30%;
  height: 34px;
  min-width: 82px;
  margin-top: 12px;
  border-radius: ${({ theme }) => theme.radius.modal};
  border: ${({ theme }) => theme.border.gray};
  color: ${({ theme }) => theme.colors.maingray};
`;
