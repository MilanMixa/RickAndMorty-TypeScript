import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold pt-10 hover:cursor-pointer hover:text-orange-450">
          The Rick And Morty App
        </h1>
      </Link>
    </div>
  );
};

export default Header;
