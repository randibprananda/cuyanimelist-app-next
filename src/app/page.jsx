import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <section>
        <HeaderAnimeList
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
