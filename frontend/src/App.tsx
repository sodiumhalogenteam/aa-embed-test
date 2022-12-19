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
                <h3>Child Application v{VERSION}</h3>
                <br />
                <Link to={"/test"}>click me</Link>
              </>
            }
          />
          <Route
            path="/test"
            element={
              <>
                <p>Sub route /test</p>
                <br />
                <Link to={"/"}>Go Back</Link>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
