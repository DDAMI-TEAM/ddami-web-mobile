import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import FilterModal from "../common/filterModal";
import { setTownFilterModal } from "../../store/actions";

const Header = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((store) => {
    return store.town;
  });

  const onClickFilterButton = () => dispatch(setTownFilterModal(true));
  const closeModal = () => dispatch(setTownFilterModal(false));

  return (
    <Wrapper>
      <SortText active={true}>인기순</SortText>
      <VerticalLine>|</VerticalLine>
      <SortText>최신순</SortText>
      <FilterButton onClick={onClickFilterButton}>필터</FilterButton>
      {modalState && <FilterModal setClose={closeModal} />}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 46px;
  padding: 21px 16px 12px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.border.light};
`;

const SortText = styled.span`
  color: ${({ theme, active }) =>
    active ? theme.colors.darkgray : theme.colors.lightgray};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

const VerticalLine = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.lightgray};
`;

const FilterButton = styled.button`
  position: absolute;
  right: 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
`;
