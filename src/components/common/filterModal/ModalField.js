import React from "react";
import styled from "styled-components";
import ModalFieldSelect from "./ModalFieldSelect";
import { mixin } from "../../../styles";

const ModalField = () => {
  return (
    <Wrapper>
      <Title>공간디자인</Title>
      <SelectList>
        <ModalFieldSelect />
        <ModalFieldSelect value="생활공간" />
        <ModalFieldSelect />
        <ModalFieldSelect />
        <ModalFieldSelect />
      </SelectList>
    </Wrapper>
  );
};

export default ModalField;

const Wrapper = styled.section`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: bold;
`;

const SelectList = styled.div`
  ${mixin.flexGrid}
`;
