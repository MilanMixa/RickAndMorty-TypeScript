import { FC } from "react";

interface IAsync {
  status: string;
  children: JSX.Element | JSX.Element[];
}

const AsyncList: FC<IAsync> = ({ status, children }) => {
  console.log(status, children);
  if (status === "error") {
    return <>Error</>;
  } else if (status === "loading") {
    return <>Loading</>;
  }

  return <>{children}</>;
};

export default AsyncList;
