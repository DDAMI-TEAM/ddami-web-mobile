import React from "react";
import styled from "styled-components";
import ModalFieldSelect from "./ModalFieldSelect";
import { mixin } from "../../../styles";

const ModalField = ({ title, data }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SelectList>
        <ModalFieldSelect />
        {data.map(({ id, name }) => (
          <ModalFieldSelect key={id} name={name} />
        ))}
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
  ${mixin.flexGrid("start")}
`;
