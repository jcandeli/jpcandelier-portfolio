interface AudioProps {
  id: string;
}

const Audio = ({ id }: AudioProps) => (
  <iframe
    width="100%"
    height="300"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/602189445&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  ></iframe>
);

export default Audio;
