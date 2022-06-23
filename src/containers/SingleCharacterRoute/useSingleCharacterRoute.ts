import { useQuery } from "react-query";
import { getSingleCharacter } from "../../api/characters";
import { SingleCharacterType } from "../../api/characters/types";

const useSingleCharacterRoute = (id: string | undefined) => {
  const fetchSingleCharacter = async () => {
    const { data } = await getSingleCharacter(id);

    return data ?? "";
  };

  const { data: singleCharacter, status: singleCharacterStatus } =
    useQuery<SingleCharacterType>(
      ["single-character", id],
      fetchSingleCharacter
    );

  return {
    singleCharacter,
    singleCharacterStatus,
  };
};

export default useSingleCharacterRoute;
