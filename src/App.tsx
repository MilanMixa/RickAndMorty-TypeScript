import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import ReactQueryProvider from "./components/Providers/ReactQueryProvider";

// COMPONENTS:
import Routes from "./containers/Routes";

const App = () => {
  return (
    <div className="App bg-gray-450 min-h-screen">
      <BrowserRouter>
        <ReactQueryProvider>
          <Header />
          <Routes />
        </ReactQueryProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
