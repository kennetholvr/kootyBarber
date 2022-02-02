// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import SignIn from "./components/signIn";
import PricingContent from './components/pricing';
import Reservations from './components/reservations';
import Availability from './components/availibility';

function App() {
  let authorization = true;
  return (
    <div className="App">
      <AmplifySignOut />
      <Routes className="appContainer">
        <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={<PricingContent authorized={authorization} />}
        />
        <Route
          path="/reservations"
          element={<Reservations authorized={authorization} />}
        />
        <Route
          path="/availability"
          element={<Availability authorized={authorization} />}
        />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
