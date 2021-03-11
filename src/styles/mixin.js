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
const mixin = {
  flex,
};

export default mixin;
