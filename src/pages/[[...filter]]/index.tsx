import Grid, { GridItem } from "@/components/Grid";
import Image from "next/image";
import MediaCard from "@/components/MediaCard";
import Modal from "@/components/Modal";
import media from "@/photo-db";
import { Media } from "@/types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>();
  const [filteredMedia, setFilteredMedia] = useState<Media[] | []>(media);
  const {
    query: { filter },
  } = useRouter();

  useEffect(() => {
    if (filter === undefined) {
      setFilteredMedia(media);
    } else {
      setFilteredMedia(media.filter((m) => m.type === filter[0]));
    }
  }, [filter]);

  return (
    <>
      <Grid>
        {filteredMedia.map((media: Media) => (
          <GridItem key={media.id} orientation={media.orientation}>
            <MediaCard media={media} onClick={() => setSelectedMedia(media)} />
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
