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

export type Testing = {
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

export default function useCharacters(): CharacterDataType {
  const [page, setPage] = useState(1);

  const fetchCharacters: QueryFunction<Testing, (string | number)[]> = async ({
    queryKey,
  }) => {
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
}
