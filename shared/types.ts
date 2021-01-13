import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type FilmItem = {
  title: string;
  genre: string;
  description?: string;
  credits?: string;
  link?: string;
  image: SanityImageSource;
  slug: string;
};

export type Member = {
  name: string;
  role?: string;
  image: SanityImageSource;
  bio: string;
  slug: string;
};
