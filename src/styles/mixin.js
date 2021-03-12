import { css } from "styled-components";

const flex = (
  alignItems = "center",
  justifyContent = "center",
  direction = "column"
) => css`
  display: felx;
  flex-direction: ${direction};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

const shorthand = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const flexGrid = (justifyContent = "space-between") => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${justifyContent};
  align-content: space-around;
`;

const mixin = {
  flex,
  flexGrid,
  shorthand,
};

export default mixin;
