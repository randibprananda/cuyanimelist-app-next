import InputSearch from "@/components/Navbar/Input";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-accent">
      <div className="md:flex-row md:items-center flex flex-col justify-between gap-2 p-4">
        <Link
          href="/"
          className="text-2xl font-bold">
          CuyAnimeList
        </Link>
        <InputSearch />
      </div>
    </nav>
  );
};

export default Navbar;
