import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="md:grid-cols-4 sm:grid-cols-3 grid grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
            className="cursor-pointer">
            <Image
              src={anime.images.webp.image_url}
              alt=""
              width={350}
              height={350}
              className="max-h-64 object-cover w-full"
            />
            <h3 className="md:text-xl text-md p-4 font-bold">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
