// @refresh reset
import styled, { keyframes, StyledComponent } from "styled-components";

interface ImageProps {
  id: string;
  direction: "top" | "left";
  delay: number;
}

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  background-color: #e0e0e0;
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
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay}ms;
`;

const Image = ({ id, direction, delay }: ImageProps) => (
  <ImageContainer>
    <ImageElement
      src={`http://jpcandelier.com/img/${id}`}
      alt={`Image with id ${id}`}
      delay={delay}
    />
  </ImageContainer>
);

export default Image;
