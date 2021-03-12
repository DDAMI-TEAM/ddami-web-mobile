import React from "react";
import styled from "styled-components";
import { mixin } from "../../../styles";

export const FILTER_TYPE = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
};

const ModalFieldSelect = ({
  id,
  name = "전체",
  type,
  active,
  activeAll,
  setActive,
}) => {
  const onClickFilter = () => setActive(id);
  return (
    <>
      {type === FILTER_TYPE.ALL && (
        <ButtonWrapper
          activeAll={false}
          active={activeAll}
          onClick={onClickFilter}
        >
          {name}
        </ButtonWrapper>
      )}

      {type === FILTER_TYPE.SPECIFIC && (
        <ButtonWrapper
          active={active}
          activeAll={activeAll}
          onClick={onClickFilter}
        >
          {name}
        </ButtonWrapper>
      )}
    </>
  );
};

export default ModalFieldSelect;

const ButtonWrapper = styled.button`
  ${mixin.flex("center", "center")}
  width: 30%;
  height: 34px;
  min-width: 82px;
  margin-top: 12px;
  margin-right: 14px;
  border-radius: ${({ theme }) => theme.radius.modal};
  border: ${({ theme: { border }, active, activeAll }) =>
    !activeAll && active ? border.active : border.gray};
  background-color: ${({ theme: { colors }, active, activeAll }) =>
    !activeAll && active ? colors.lightpurple : colors.white};
  color: ${({ theme: { colors }, active, activeAll }) =>
    !activeAll && active ? colors.purple : colors.maingray};
  font-weight: ${({ activeAll, active }) => !activeAll && active && "bold"};
  &:nth-child(3n) {
    margin-right: 0;
  }
`;
