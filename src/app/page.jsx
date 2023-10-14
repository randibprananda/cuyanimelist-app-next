import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link
          href="/populer"
          className="hover:text-indigo-500 text-md md:text-xl underline transition-all">
          Lihat Semua
        </Link>
      </div>
      <div className="md:grid-cols-4 sm:grid-cols-3 grid grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div
              key={data.mal_id}
              className="shadow-xl">
              <AnimeList
                title={data.title}
                image={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
