import { DataTypes } from "../../containers/Characters/useCharacters";
import request, { APICall } from "../request";

export const getCharacters = (page: number): APICall<DataTypes> =>
  request.get(`/character?page=${page}`);

export const getSingleCharacter = (id: string | undefined) =>
  request.get(`/character/${id}`);
