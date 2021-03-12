import React, { useEffect } from "react";
import styled from "styled-components";
import ModalField from "./ModalField";
import ModalBottom from "./ModalBottom";

const modalBackground = "modal-background";

const Modal = ({ setClose }) => {
  useEffect(() => {
    return setClose;
  }, [setClose]);

  const onClickModal = ({ target }) => {
    if (target.id === modalBackground) return setClose();
  };

  return (
    <Background id={modalBackground} onClick={onClickModal}>
      <ModalWrapper>
        <Header>필터</Header>
        <ContentSection>
          {MODAL_DATA.map(({ id, title, data }) => (
            <ModalField key={id} title={title} data={data} />
          ))}
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
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.modal};
`;

const ModalWrapper = styled.div`
  margin: 80px 20px;
  border-radius: ${({ theme }) => theme.radius.modal};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  padding: 14px 23px;
  background-color: ${({ theme }) => theme.colors.modalHeader};
  border-radius: ${({ theme }) => theme.radius.modalHeader};
  line-height: 18px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
`;

const ContentSection = styled.section`
  height: 468px;
  padding: 23px;
  overflow-y: scroll;
`;

const MODAL_DATA = [
  {
    id: 1,
    title: "공간 디자인",
    data: [
      { id: 11, name: "생활공간" },
      { id: 12, name: "건축" },
      { id: 13, name: "인테리어" },
      { id: 14, name: "실내" },
      { id: 15, name: "환경" },
    ],
  },
  {
    id: 2,
    title: "현대미술",
    data: [
      { id: 21, name: "회화" },
      { id: 22, name: "조형" },
    ],
  },
  {
    id: 3,
    title: "공예 디자인",
    data: [
      { id: 31, name: "도자" },
      { id: 32, name: "금속" },
      { id: 33, name: "섬유" },
      { id: 34, name: "목공" },
    ],
  },
  {
    id: 4,
    title: "그래픽 디자인",
    data: [
      { id: 41, name: "광고" },
      { id: 42, name: "타이포" },
      { id: 43, name: "사진" },
      { id: 44, name: "일러스트" },
    ],
  },
];
