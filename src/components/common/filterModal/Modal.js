import React from "react";
import styled from "styled-components";
import ModalField from "./ModalField";
import ModalBottom from "./ModalBottom";

const Modal = () => {
  return (
    <Background>
      <ModalWrapper>
        <Header>필터</Header>
        <ContentSection>
          <ModalField />
          <ModalField />
        </ContentSection>
        <ModalBottom />
      </ModalWrapper>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modal};
`;

const ModalWrapper = styled.div`
  margin: 20px;
  border-radius: ${({ theme }) => theme.radius.modal};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  padding: 14px 23px;
  background-color: ${({ theme }) => theme.colors.modalHeader};
  border-radius: ${({ theme }) => theme.radius.modalHeader};
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
`;

const ContentSection = styled.section`
  height: 423px;
  padding: 23px;
`;
