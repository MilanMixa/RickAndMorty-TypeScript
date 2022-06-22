import { Testing } from "../../containers/Characters/useCharacters";
import request, { APICall } from "../request";

export const getCharacters = (page: number): APICall<Testing> =>
  request.get(`/character?page=${page}`);

export const getSingleCharacter = (id: number) =>
  request.get(`/character/${id}`);
