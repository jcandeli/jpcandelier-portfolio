import styled, { StyledComponent } from "styled-components";

const GRID_COLS = 3;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* default to one column on mobile */
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${GRID_COLS}, 1fr);
  }
`;

export default Grid;

interface GridItemProps {
  orientation: "horizontal" | "vertical";
}

const GridItem: StyledComponent<"div", any, GridItemProps> = styled.div`
  grid-column: span
    ${({ orientation }) => (orientation === "horizontal" ? 2 : 1)};
  grid-row: span ${({ orientation }) => (orientation === "vertical" ? 2 : 1)};

  /* Set item to fill the entire grid cell */
  width: 100%;
  height: ${({ orientation }) =>
    orientation === "vertical" ? "auto" : "calc((100vw / 3) - 2rem)"};
`;

/* Export the new component */
export { GridItem };
