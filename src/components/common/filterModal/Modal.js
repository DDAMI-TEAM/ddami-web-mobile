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
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modal};
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
      { id: 1, name: "생활공간" },
      { id: 2, name: "건축" },
      { id: 3, name: "인테리어" },
      { id: 4, name: "실내" },
      { id: 5, name: "환경" },
    ],
  },
  {
    id: 2,
    title: "현대미술",
    data: [
      { id: 1, name: "회화" },
      { id: 2, name: "조형" },
    ],
  },
  {
    id: 3,
    title: "공예 디자인",
    data: [
      { id: 1, name: "도자" },
      { id: 2, name: "금속" },
      { id: 3, name: "섬유" },
      { id: 4, name: "목공" },
    ],
  },
  {
    id: 4,
    title: "그래픽 디자인",
    data: [
      { id: 1, name: "광고" },
      { id: 2, name: "타이포" },
      { id: 3, name: "사진" },
      { id: 4, name: "일러스트" },
    ],
  },
];
