const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="text-primary flex items-center justify-center gap-4 px-2 py-4 text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="hover:text-accent transition-all">
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="hover:text-accent transition-all">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
