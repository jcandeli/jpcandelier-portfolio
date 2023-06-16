import Audio from "@/components/Audio";
import Image from "@/components/Image";
import Video from "@/components/Video";
import { MouseEventHandler } from "react";
import { Media } from "@/types";

interface MediaCardProps {
  media: Media;
  onClick: MouseEventHandler | null;
}

const MediaCard = ({ media, onClick = () => {} }: MediaCardProps) => {
  switch (media.type) {
    case "video":
      return <Video id={media.id} title={media.title} />;
    case "image":
      return (
        <a onClick={onClick}>
          <Image id={media.id} title={media.title} alt={media.title} />
        </a>
      );
    case "audio":
      return <Audio id={media.id} />;
    default:
      return <p>Invalid media type.</p>;
  }
};

export default MediaCard;
