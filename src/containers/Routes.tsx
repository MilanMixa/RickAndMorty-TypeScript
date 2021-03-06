import { Route, Routes as Switch } from "react-router-dom";
import Characters from "./Characters/Characters";
import SingleCharacterRoute from "./SingleCharacterRoute/SingleCharacterRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Characters />} />
      <Route path="character/:id" element={<SingleCharacterRoute />} />
    </Switch>
  );
};

export default Routes;
