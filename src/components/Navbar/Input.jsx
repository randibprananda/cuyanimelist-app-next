"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchRef = useRef();

  const handleSearch = (event) => {
    let keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") {
      return;
    }

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        type="text"
        placeholder="Cari anime..."
        className="w-full p-2 rounded"
        onKeyDown={handleSearch}
      />
      <button
        className="end-2 top-2 absolute"
        onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
