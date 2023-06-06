"use client";
import Video from "@/components/Video";
import Audio from "@/components/Audio";
import Image from "@/components/Image";
import { Media } from "@/types";

interface MediaComponentProps {
  media: Media;
}

const MediaComponent = ({ media }: MediaComponentProps) => {
  switch (media.type) {
    case "video":
      return <Video id={media.id} />;
    case "image":
      return <Image id={media.id} />;
    case "audio":
      return <Audio id={media.id} />;
    default:
      return <p>Invalid media type.</p>;
  }
};

export default MediaComponent;
