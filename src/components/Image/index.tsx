import styled from "styled-components";
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
  align-items: center;
  background-color: #dadada;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const ImageElement = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
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
