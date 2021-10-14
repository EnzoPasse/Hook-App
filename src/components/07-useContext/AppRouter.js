import { 
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/about" component={AboutScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Redirect to="/" />
    </Switch>
  );
};
