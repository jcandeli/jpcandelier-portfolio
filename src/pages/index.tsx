import Grid, { GridItem } from "@/components/Grid";
import Image from "next/image";
import MediaCard from "@/components/MediaCard";
import Modal from "@/components/Modal";
import photos from "@/photo-db";
import { Media, Photo } from "@/types";
import { useState } from "react";

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>();

  return (
    <>
      <Grid>
        {photos.map((photo: Photo) => (
          <GridItem key={photo.id} orientation={photo.orientation}>
            <MediaCard media={photo} onClick={() => setSelectedMedia(photo)} />
          </GridItem>
        ))}

        {selectedMedia && (
          <Modal isOpen onClose={() => setSelectedMedia(null)}>
            <Image
              src={`http://jpcandelier.com/img/${selectedMedia.id}`}
              alt={selectedMedia.title}
              style={{ objectFit: "contain" }}
              fill
            />
          </Modal>
        )}
      </Grid>
    </>
  );
}
