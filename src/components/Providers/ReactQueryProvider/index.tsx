import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// another fix for ts(2322) instead of changing direct in modules

// declare module "react-query/types/react/QueryClientProvider" {
//     interface QueryClientProviderProps {
//       children?: ReactNode;
//     }
//   }

interface IProvider {
  children: JSX.Element[];
}

const queryClient = new QueryClient();

const ReactQueryProvider: FC<IProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools position="bottom-right" />
      )}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
