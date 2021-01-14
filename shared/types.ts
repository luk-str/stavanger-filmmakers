import { SanityDocument } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type FilmItem = {
  title: string;
  genre: string;
  description?: SanityDocument;
  castMembers?: SanityDocument[];
  crewMembers?: SanityDocument[];
  videoLink?: string;
  externalLink?: string;
  image: SanityImageSource;
  slug: string;
  releaseDate: Date;
};

export type Member = {
  name: string;
  role?: string;
  image: SanityImageSource;
  bio: SanityDocument;
  slug: string;
};
