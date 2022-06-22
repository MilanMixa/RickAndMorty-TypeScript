import { FC } from "react";
import { Link } from "react-router-dom";
import { CharacterStatusEnum } from "../../api/characters/types";
import useSingleCharacter from "./useSingleCharacter";

interface ISingleCharacter {
  image: string;
  name: string;
  status: CharacterStatusEnum;
  species: string;
  location: { name: string; url: string };
  id: number;
}

const SingleCharacter: FC<ISingleCharacter> = ({
  image,
  name,
  status,
  species,
  location,
  id,
}) => {
  const { colors } = useSingleCharacter();

  return (
    <Link className="text-white flex container mx-auto" to={`/character/${id}`}>
      <img
        className="inline rounded-l-xl h-72 min-w-[50%] object-cover"
        src={image}
        alt="avatar"
      />
      <div className="bg-gray-400 flex flex-col justify-evenly w-full rounded-r-xl text-left">
        <div className="ml-2">
          <h3 className="text-2xl font-bold hover:text-orange-450">{name}</h3>
          <p>
            <span
              className={`w-2 h-2 rounded-xl ${colors[status]} inline-block mr-2`}
            ></span>
            {status} - {species}
          </p>
        </div>
        <div className="ml-2">
          <p>Last seen on:</p>
          <p className="hover:text-orange-450">{location.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCharacter;
