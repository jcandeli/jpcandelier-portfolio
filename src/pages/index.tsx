import { useState } from "react";
import Image from "@/components/Image";
import Grid, { GridItem } from "@/components/Grid";
import Modal from "@/components/Modal";
import photos from "@/photo-db";
import { Photo, Media } from "@/types";

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>();

  return (
    <Grid>
      {/* <GridItem orientation="horizontal">
        <MediaCard type="video" id="mpcZOL9FwlA" />
      </GridItem> */}
      {/* <MediaCard
        type="audio"
        id="https://soundcloud.com/108villains/stbb-829-here-comes-my-mess"
      /> */}
      {/* <GridItem orientation="full">
        <Image id="travel/4571721717_bb4f9da01a_b.jpg" delay={0} />
      </GridItem> */}
      {photos.map((photo: Photo, index) => (
        <GridItem key={photo.id} orientation={photo.orientation}>
          <a onClick={() => setSelectedMedia(photo)}>
            <Image
              id={photo.id}
              direction={photo.orientation === "vertical" ? "top" : "left"}
              delay={index * 200}
            />
          </a>
        </GridItem>
      ))}
      {/* {selectedMedia && (
        <Modal isOpen onClose={() => setSelectedMedia(null)}>
          <Image id={selectedMedia.id} />
        </Modal>
      )} */}
    </Grid>
  );
}
