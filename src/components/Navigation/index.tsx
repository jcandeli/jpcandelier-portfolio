import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Anchor = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 200;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-direction: row;
  gap: 2rem;
`;

const NavLink = styled(Anchor)`
  font-size: 1.5rem;
`;

const FilterLink = styled(Anchor)`
  font-size: 1rem;
  letter-spacing: 2px;
  color: #404040;
`;

const FilterList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  flex-direction: row;
  gap: 1rem;
`;

interface NavigationProps {
  activePage: string;
}

const Navigation = ({ activePage }: NavigationProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Nav>
      <NavList>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink
            href="https://github.com/jcandeli/jpcandelier-portfolio"
            target="_blank"
          >
            Github
          </NavLink>
        </li>
        <li>
          <NavLink
            href="https://www.linkedin.com/in/jp-candelier/"
            target="_blank"
          >
            LinkedIn
          </NavLink>
        </li>
      </NavList>

      <FilterList>
        {showFilters && (
          <>
            <li>
              <FilterLink href="/">All</FilterLink>
            </li>
            <li>
              <FilterLink href="/image">Photos</FilterLink>
            </li>
            <li>
              <FilterLink href="/video">Videos</FilterLink>
            </li>
            <li>
              <FilterLink href="/audio">Music</FilterLink>
            </li>
            <li>
              <FilterLink href="/designs">Designs</FilterLink>
            </li>
          </>
        )}
        <li>
          <Image
            src="/filter-icon.svg"
            alt="filter icon"
            width={16}
            height={16}
            aria-hidden
            onClick={handleFilterClick}
          />
        </li>
      </FilterList>
    </Nav>
  );
};

export default Navigation;
