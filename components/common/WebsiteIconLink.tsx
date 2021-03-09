import type { WebsiteLink } from "../../shared/types";
import { FiInstagram, FiLink } from "react-icons/fi";
import {
  SiFacebook,
  SiImdb,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
  SiVimeo,
  SiYoutube,
} from "react-icons/si";

function getIconForLink(websiteName: string): JSX.Element {
  switch (websiteName) {
    case "imdb":
      return <SiImdb />;
    case "youtube":
      return <SiYoutube />;
    case "spotify":
      return <SiSpotify />;
    case "linkedin":
      return <SiLinkedin />;
    case "instagram":
      return <FiInstagram />;
    case "facebook":
      return <SiFacebook />;
    case "twitter":
      return <SiTwitter />;
    case "vimeo":
      return <SiVimeo />;
    default:
      return <FiLink />;
  }
}

type Props = {
  link: WebsiteLink;
  title: string;
};

const WebsiteIconLink = ({ link, title }: Props) => {
  return (
    <a
      href={link.url}
      title={`Link to ${title}'s ${link.websiteName}. Opens in new tab`}
      rel="noreferrer noopener"
      target="_blank"
    >
      {getIconForLink(link.websiteName)}
    </a>
  );
};

export default WebsiteIconLink;
