import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 8);

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
      <section>
        <HeaderAnimeList
          title="Rekomendasi"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
