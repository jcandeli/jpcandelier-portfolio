"use client";
import { useState } from "react";
import styled from "styled-components";

interface VideoProps {
  id: string;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImageElement = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Video = ({ id }: VideoProps) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleClick = () => {
    setShowPlayer(true);
  };

  return (
    <>
      {!showPlayer && (
        <ImageContainer>
          <ImageElement
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            onClick={handleClick}
          />
        </ImageContainer>
      )}
      {showPlayer && (
        <iframe
          title="YouTube Video Player"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default Video;
