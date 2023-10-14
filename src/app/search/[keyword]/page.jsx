import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <HeaderAnimeList title={`Pencarian untuk ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
