export enum CharacterStatusEnum {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKOWN = "unkown",
}

export type SingleCharacterType = {
  image: string;
  name: string;
  status: CharacterStatusEnum;
  species: string;
  location: { name: string; url: string };
  id: number;
};
