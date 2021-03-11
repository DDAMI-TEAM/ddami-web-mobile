import React from "react";
import styled from "styled-components";
import { mixin } from "../../styles";

const FilterBadge = () => {
  return (
    <Badge>
      <BadgeText>생활공간</BadgeText>
      <RemoveButton>X</RemoveButton>
      {/* TODO : ICON svg 추가 */}
    </Badge>
  );
};

export default FilterBadge;

const Badge = styled.span`
  ${mixin.flex("center", "center", "row")}
  width: fit-content;
  padding: 6px 12px;
  border: ${({ theme }) => theme.border.purple};
  border-radius: 14px;
`;

const BadgeText = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;

const RemoveButton = styled.button``;
