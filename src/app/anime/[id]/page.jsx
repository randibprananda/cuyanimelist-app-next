import Image from "next/image";

import VideoPlayer from "@/components/VideoPlayer";
import { getAnimeResponse } from "@/libs/api";

const Page = async ({ params: { id } }) => {
  const { data: anime } = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-primary text-2xl">
          {anime.title} - {anime.year}
        </h3>
      </div>
      <div className="text-primary flex gap-2 px-4 pt-4 overflow-x-auto">
        <div className="w-36 border-primary flex flex-col items-center justify-center p-2 border rounded">
          <h3>PERINGKAT</h3>
          <p>{anime.rank}</p>
        </div>
        <div className="w-36 border-primary flex flex-col items-center justify-center p-2 border rounded">
          <h3>SKOR</h3>
          <p>{anime.score}</p>
        </div>
        <div className="w-36 border-primary flex flex-col items-center justify-center p-2 border rounded">
          <h3>ANGGOTA</h3>
          <p>{anime.members}</p>
        </div>
        <div className="w-36 border-primary flex flex-col items-center justify-center p-2 border rounded">
          <h3>EPISODE</h3>
          <p>{anime.episodes}</p>
        </div>
      </div>
      <div className="text-primary sm:flex-nowrap flex flex-wrap gap-2 px-4 pt-4">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.images.jpg.image_url}
          width={250}
          height={250}
          className="object-cover rounded"
        />
        <p className="text-xl text-justify">{anime.synopsis}</p>
      </div>
      <VideoPlayer youtubeId={anime.trailer.youtube_id} />
    </>
  );
};

export default Page;
