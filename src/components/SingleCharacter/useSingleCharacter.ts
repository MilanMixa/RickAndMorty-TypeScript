import { CharacterStatusEnum } from "../../api/characters/types";

export type CharacterDataType = {
  colors: { [key in CharacterStatusEnum]: string };
};

export default function useSingleCharacter(): CharacterDataType {
  const colors = {
    [CharacterStatusEnum.ALIVE]: "bg-green-500",
    [CharacterStatusEnum.DEAD]: "bg-red-500",
    [CharacterStatusEnum.UNKOWN]: "bg-gray-500",
  };

  return {
    colors,
  };
}
