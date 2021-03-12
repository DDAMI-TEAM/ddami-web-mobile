import React from "react";
import styled from "styled-components";
import { mixin } from "../../../styles";

const ModalBottom = () => {
  return (
    <Wrapper>
      <Button>모두 초기화</Button>
      <ApplyButton>적용하기</ApplyButton>
    </Wrapper>
  );
};

export default ModalBottom;

const Wrapper = styled.section`
  display: flex;
  margin-bottom: 32px;
`;

const Button = styled.button`
  ${mixin.flex("center", "center")}
  flex: 1;
  padding: 20px 37px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.lightpurple};
  border-radius: 0 0 0 7px;
  color: ${({ theme }) => theme.colors.purple};
`;

const ApplyButton = styled(Button)`
  background: ${({ active, theme }) =>
    active ? theme.background.main : theme.colors.lightgray};
  border-radius: 0 0 7px 0;
  color: ${({ theme }) => theme.colors.white};
`;
