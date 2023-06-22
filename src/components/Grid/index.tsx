import styled, { StyledComponent } from "styled-components";
import { Orinetation } from "@/types";

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
  orientation: Orinetation;
}

const GridItem: StyledComponent<"div", any, GridItemProps> = styled.div`
  grid-column: span
    ${({ orientation }) =>
      (orientation === "horizontal" && 2) ||
      (orientation === "block" && 2) ||
      (orientation === "banner" && 3) ||
      1};
  grid-row: span
    ${({ orientation }) =>
      (orientation === "vertical" && 2) || (orientation === "block" && 2) || 1};

  /* Set item to fill the entire grid cell */
  width: 100%;
  height: ${({ orientation }) =>
    (orientation === "vertical" && "auto") ||
    (orientation === "block" && "calc((100vw / 2) - 2rem)") ||
    "calc((100vw / 3) - 2rem)"};
`;

/* Export the new component */
export { GridItem };
