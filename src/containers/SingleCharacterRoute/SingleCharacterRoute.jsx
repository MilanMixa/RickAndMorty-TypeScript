import useSingleCharacterRoute from "./useSingleCharacterRoute";
import { useParams } from "react-router-dom";
import AsyncWrapper from "../../hoc/AsyncList/AsyncList";
import useSingleCharacter from "../../components/SingleCharacter/useSingleCharacter";

export default function SingleCharacterRoute() {
  const { id } = useParams();
  const { singleCharacter, singleCharacterStatus } =
    useSingleCharacterRoute(id);

  // name, status, species, origin.name, location.name, image

  const { colors } = useSingleCharacter;

  return (
    <AsyncWrapper status={singleCharacterStatus}>
      <div className="text-white bg-gray-400 mt-[10vh] xl:flex w-2/4 mx-auto xl:mt-[20vh] rounded-2xl overflow-hidden">
        <div className="m-5 xl:w-1/3 xl:m-10">
          <img
            className="rounded-2xl w-full mb-5"
            src={singleCharacter?.image}
            alt="avatar"
          />
          <h3 className="bg-gray-500 rounded-xl p-3 text-center text-2xl font-bold">
            Name: {singleCharacter?.name}
          </h3>
        </div>

        <div className="xl:flex mx-auto items-center">
          <div>
            <div className="bg-gray-500 rounded-xl p-3 text-center m-5">
              <p>
                Status:
                <span
                  className={`w-2 h-2 rounded-xl ${
                    colors[singleCharacter?.status]
                  } inline-block mx-1`}
                ></span>
                {singleCharacter?.status}
              </p>
            </div>
            <div className="bg-gray-500 rounded-xl p-3 text-center m-5">
              <p>Species: {singleCharacter?.species}</p>
            </div>
          </div>
          <div>
            <div className="bg-gray-500 rounded-xl p-3 text-center m-5">
              <p>Origin: {singleCharacter?.origin.name}</p>
            </div>
            <div className="bg-gray-500 rounded-xl p-3 text-center m-5">
              <p>Location: {singleCharacter?.location.name}</p>
            </div>
          </div>
        </div>
      </div>
    </AsyncWrapper>
  );
}
