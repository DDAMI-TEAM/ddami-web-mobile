import React from "react";
import styled from "styled-components";
import { mixin } from "../../styles";

const FilterBadge = ({ name }) => {
  return (
    <Badge>
      <BadgeText>{name}</BadgeText>
      <RemoveButton>X</RemoveButton>
      {/* TODO : ICON svg 추가 */}
    </Badge>
  );
};

export default FilterBadge;

const Badge = styled.span`
  ${mixin.flex("center", "center", "row")}
  flex: 0 0 auto;
  width: fit-content;
  height: 28px;
  padding: 6px 12px;
  border: ${({ theme }) => theme.border.purple};
  border-radius: 14px;
  margin-right: 10px;
`;

const BadgeText = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;

const RemoveButton = styled.button``;
