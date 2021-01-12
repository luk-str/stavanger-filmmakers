import { useRouter } from "next/router";
import Link from "next/link";

const Film = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <h3>This is a page for the film: {title}</h3>
    </>
  );
};

export default Film;
