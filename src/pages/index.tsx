import { useState } from "react";
import Image from "@/components/Image";
import MediaCard from "@/components/MediaCard";
import Grid, { GridItem } from "@/components/Grid";
import Modal from "@/components/Modal";
import photos from "@/photo-db";
import { Photo, Media } from "@/types";

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>();

  return (
    <Grid>
      {photos.map((photo: Photo) => (
        <GridItem key={photo.id} orientation={photo.orientation}>
          <MediaCard media={photo} />
        </GridItem>
      ))}
      {selectedMedia && (
        <Modal isOpen onClose={() => setSelectedMedia(null)}>
          <Image id={selectedMedia.id} />
        </Modal>
      )}
    </Grid>
  );
}
