import { SanityDocument } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type FilmItem = {
  title: string;
  genre: string;
  description?: SanityDocument;
  castMembers?: SanityDocument[];
  crewMembers?: SanityDocument[];
  videoLink?: string;
  image: SanityImageSource;
  slug: string;
  releaseDate: Date;
  links?: WebsiteLink[];
};

export type Member = {
  name: string;
  role?: string;
  image: SanityImageSource;
  bio: SanityDocument;
  slug: string;
  links: WebsiteLink[];
};

export type ContactInfo = {
  header: string;
  mail: string;
  phone: string;
};

export type Event = {
  title: string;
  place: string;
  date: string;
  link: string;
};

export type WebsiteLink = {
  websiteName: string;
  url: string;
};
