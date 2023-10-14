import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500">
      <div className="md:flex-row flex flex-col justify-between gap-2 p-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white">
          CuyAnimeList
        </Link>
        <input
          type="text"
          placeholder="Cari Anime"
        />
      </div>
    </nav>
  );
};

export default Navbar;
