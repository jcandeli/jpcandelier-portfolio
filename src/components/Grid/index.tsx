"use client";
import styled, { StyledComponent } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* default to one column on mobile */
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* three columns on desktop */
  }
`;

export default Grid;

interface GridItemProps {
  orientation: "horizontal" | "vertical" | "full";
}

const GridItem: StyledComponent<"div", any, GridItemProps> = styled.div`
  grid-column: span ${(props) => (props.orientation === "horizontal" ? 2 : 1)};
  grid-row: span ${(props) => (props.orientation === "vertical" ? 2 : 1)};

  /* Set item to fill the entire grid cell */
  width: 100%;
  height: ${(props) =>
    props.orientation === "vertical" ? "auto" : "calc(100vw / 3)"};
`;

/* Export the new component */
export { GridItem };
