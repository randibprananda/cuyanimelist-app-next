import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, image, id }) => {
  return (
    <Link
      href={`/${id}`}
      className="cursor-pointer">
      <Image
        src={image}
        alt=""
        width={350}
        height={350}
        className="max-h-64 object-cover w-full"
      />
      <h3 className="md:text-xl text-md p-4 font-bold">{title}</h3>
    </Link>
  );
};

export default AnimeList;
