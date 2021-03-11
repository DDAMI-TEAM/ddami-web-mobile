import React from "react";
import styled from "styled-components";
import FilterBadge from "./FilterBadge";

const FilterList = () => {
  return (
    <Wrapper>
      <FilterBadge />
    </Wrapper>
  );
};

export default FilterList;

const Wrapper = styled.div`
  width: 100%;
  padding: 14px 16px 6px 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;
