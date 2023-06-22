import { GridItem } from "@/components/Grid";
import MediaCard from "@/components/MediaCard";
import { Photo } from "@/types";

interface BannerProps {
  photo: Photo;
}

export default function Banner({ photo }: BannerProps) {
  return (
    <GridItem orientation="banner">
      <MediaCard media={photo} />
    </GridItem>
  );
}
