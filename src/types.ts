type GenericMedia = {
  type: Type;
  id: string;
  title?: string;
  orientation?: Orinetation;
};

export type Video = GenericMedia;

export type Photo = GenericMedia & {
  category?: string;
  location?: string;
  camera?: string;
  home?: boolean;
};

export type Orinetation = "vertical" | "horizontal";

export type Type = "image" | "video" | "audio";

export type Media = Video | Photo;
