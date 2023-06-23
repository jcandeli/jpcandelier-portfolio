import styled, { keyframes } from "styled-components";
import Title from "@/components/Title";
import TitleOverlay from "@/components/TitleOverlay";

interface ImageProps {
  id: string;
  direction: "top" | "left";
  title: string | undefined;
  camera: string | undefined;
  location: string | undefined;
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
`;

const Image = ({ id, title }: ImageProps) => (
  <ImageContainer>
    <ImageElement
      src={`http://jpcandelier.com/img/${id}`}
      alt={`Image with id ${id}`}
    />
    <TitleOverlay>
      <Title>{title}</Title>
    </TitleOverlay>
  </ImageContainer>
);

export default Image;
