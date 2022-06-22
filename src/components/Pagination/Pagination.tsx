import { Dispatch, FC, SetStateAction } from "react";

interface IPagination {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPage: number | null;
}

const Pagination: FC<IPagination> = ({ page, setPage, maxPage }) => {
  return (
    <div className="flex justify-center py-10">
      <button
        disabled={page === 1}
        onClick={() => {
          setPage((page) => page - 1);
        }}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Prev
      </button>
      <button
        disabled={page === maxPage}
        onClick={() => {
          setPage((page: number) => page + 1);
        }}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
