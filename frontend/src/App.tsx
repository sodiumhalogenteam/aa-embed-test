import "./App.css";
import { VERSION } from "./VERSION";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

interface AppProps {
  user: { userId: string };
}
function App(props: AppProps) {
  return (
    <BrowserRouter>
      <div className="App" id="new-features">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3>Home Child Application {VERSION}</h3>
                <br />
                <Link to={"/test"}>click messs!</Link>
              </>
            }
          />
          <Route path="/test" element={<h3>sub app routing workssss!</h3>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
