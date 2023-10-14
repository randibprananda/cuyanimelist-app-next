import Link from "next/link";

const HeaderAnimeList = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="hover:text-indigo-500 text-md md:text-xl underline transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default HeaderAnimeList;
