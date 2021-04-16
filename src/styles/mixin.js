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

const flexColumn = css`
  display: flex;
  flex-direction: column;
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

const hideScroll = css`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const scrollX = css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const mixin = {
  flex,
  flexGrid,
  flexColumn,
  shorthand,
  hideScroll,
  scrollX,
};

export default mixin;
