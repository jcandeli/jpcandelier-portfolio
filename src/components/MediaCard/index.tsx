"use client";
import Video from "@/components/Video";
import Audio from "@/components/Audio";
import Image from "@/components/Image";
import { Media } from "@/types";

interface MediaCardProps {
  media: Media;
}

const MediaCard = ({ media }: MediaCardProps) => {
  switch (media.type) {
    case "video":
      return <Video id={media.id} title={media.title} />;
    case "image":
      return <Image id={media.id} />;
    case "audio":
      return <Audio id={media.id} />;
    default:
      return <p>Invalid media type.</p>;
  }
};

export default MediaCard;
