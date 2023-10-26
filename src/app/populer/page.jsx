"use client";

import { useEffect, useState } from "react";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/HeaderMenu";
import Pagination from "@/components/Pagination";
import { getAnimeResponse } from "@/libs/api";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnime?.pagination?.last_visible_page}
      />
    </>
  );
};

export default Page;
