// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import { withAuthenticator} from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import SignIn from "./components/signIn";
import PricingContent from './components/pricing';
import Reservations from './components/reservations';
import Availability from './components/availibility';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  let authorization = true;
  return (
    <div className="App">
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
