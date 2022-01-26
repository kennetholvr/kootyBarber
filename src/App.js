// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import SignIn from "./components/signIn";
import PricingContent from './components/pricing';

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
      </Routes>
    </div>
  );
}

export default App;
