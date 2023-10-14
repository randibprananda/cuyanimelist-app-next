import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl min-h-screen gap-4 mx-auto">
      <FileSearch
        size={42}
        className="text-accent"
      />
      <h3 className="text-accent text-4xl font-bold">NOT FOUND</h3>
      <Link
        href="/"
        className="text-primary hover:text-accent text-2xl underline transition-all duration-300">
        Kembali
      </Link>
    </div>
  );
};

export default Page;
