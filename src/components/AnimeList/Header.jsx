import Link from "next/link";

const HeaderAnimeList = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-primary text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="hover:text-accent text-md md:text-xl text-primary underline transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default HeaderAnimeList;
