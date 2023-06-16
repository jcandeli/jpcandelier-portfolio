import Audio from "@/components/Audio";
import Image from "@/components/Image";
import Video from "@/components/Video";
import { Media } from "@/types";

interface MediaCardProps {
  media: Media;
}

const MediaCard = ({ media }: MediaCardProps) => {
  switch (media.type) {
    case "video":
      return <Video id={media.id} title={media.title} />;
    case "image":
      return <Image id={media.id} title={media.title} alt={media.title} />;
    case "audio":
      return <Audio id={media.id} />;
    default:
      return <p>Invalid media type.</p>;
  }
};

export default MediaCard;
