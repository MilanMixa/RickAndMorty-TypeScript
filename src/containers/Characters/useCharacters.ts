import { Dispatch, SetStateAction, useState } from "react";
import { QueryFunction, useQuery } from "react-query";
import { getCharacters as getCharactersAPI } from "../../api/characters";
import { SingleCharacterType } from "../../api/characters/types";

export type InfoTypes = {
  count: number;
  next: string;
  pages: number;
  prev: null | number;
};

export type DataTypes = {
  info: InfoTypes | null;
  results: SingleCharacterType[];
};

export type CharacterDataType = {
  info: InfoTypes;
  characters: SingleCharacterType[];
  charactersStatus: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const useCharacters = (): CharacterDataType => {
  const [page, setPage] = useState(1);

  const fetchCharacters: QueryFunction<
    DataTypes,
    (string | number)[]
  > = async ({ queryKey }) => {
    const { data } = await getCharactersAPI(queryKey[1] as number);

    return data;
  };

  const { data: response, status: charactersStatus } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  const characters = response?.results || [];
  const info = response?.info || { count: 0, next: "", pages: 0, prev: null };

  return {
    info,
    characters,
    charactersStatus,
    page,
    setPage,
  };
};

export default useCharacters;
