import Link from "next/link";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-direction: row;
  gap: 2rem;
  justify-content: right;

  a {
    color: #000;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 200;
  }
`;

interface NavigationProps {
  activePage: string;
}

const Navigation = ({ activePage }: NavigationProps) => (
  <nav>
    <NavList>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Me</Link>
      </li>
      <li>
        <Link
          href="https://github.com/jcandeli/jpcandelier-portfolio"
          target="_blank"
        >
          Github
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/jp-candelier/" target="_blank">
          LinkedIn
        </Link>
      </li>
    </NavList>
  </nav>
);

export default Navigation;
