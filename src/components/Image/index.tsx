// @refresh reset
import styled, { keyframes } from "styled-components";
import TitleOverlay from "@/components/TitleOverlay";

interface ImageProps {
  id: string;
  direction: "top" | "left";
  delay: number;
  title: string;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const slideDown = keyframes`
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    scale: 1.1;
  }
`;

const ImageElement = styled.img`
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  object-fit: cover;
  width: 100%;
  height: 100%;
  animation-name: ${slideDown};
  animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay}ms;
`;

const Image = ({ id, direction, title = "", delay = 0 }: ImageProps) => (
  <ImageContainer>
    <ImageElement
      src={`http://jpcandelier.com/img/${id}`}
      alt={`Image with id ${id}`}
      delay={delay}
    />
    <TitleOverlay>{title}</TitleOverlay>
  </ImageContainer>
);

export default Image;
