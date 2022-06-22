import { useQuery } from "react-query";
import { getSingleCharacter } from "../../api/characters";

export default function useSingleCharacterRoute(id) {
  const fetchSingleCharacter = async () => {
    const { data } = await getSingleCharacter(id);

    return data;
  };

  const { data: singleCharacter, status: singleCharacterStatus } = useQuery(
    ["single-character", id],
    fetchSingleCharacter
  );

  return {
    singleCharacter,
    singleCharacterStatus,
  };
}
