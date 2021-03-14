import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FilterBadge from "./FilterBadge";
import { mixin } from "../../styles";

const FilterList = () => {
  const { filters } = useSelector((store) => {
    return store.town;
  });

  return (
    <Wrapper>
      <FilterBadgeList>
        {filters.map(({ id, name }) => (
          <FilterBadge key={id} id={id} name={name} />
        ))}
      </FilterBadgeList>
    </Wrapper>
  );
};

export default FilterList;

const Wrapper = styled.div`
  width: 100%;
  padding: 14px 16px 6px 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const FilterBadgeList = styled.div`
  ${mixin.scrollX}
  ${mixin.hideScroll}
  width: 100%;
`;
