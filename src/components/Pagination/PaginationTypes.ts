import { Dispatch, SetStateAction } from "react";

type Props1 = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPage: number | null;
};

export default Props1;
