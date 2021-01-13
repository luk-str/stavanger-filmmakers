import { SanityDocument } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Url } from "url";

export type FilmItem = {
  title: string;
  genre: string;
  description?: SanityDocument;
  castMembers?: SanityDocument[];
  crewMembers?: SanityDocument[];
  videoLink?: Url;
  externalLink?: Url;
  image: SanityImageSource;
  slug: string;
  releaseDate: Date;
};

export type Member = {
  name: string;
  role?: string;
  image: SanityImageSource;
  bio: string;
  slug: string;
};
