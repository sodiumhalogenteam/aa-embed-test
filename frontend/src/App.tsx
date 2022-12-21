import "./App.css";
import { VERSION } from "./VERSION";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

interface AppProps {
  user: { userId: string };
}
function App(props: AppProps) {
  return (
    <BrowserRouter basename="/new-features">
      <div className="App">
        Embed App
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3>Child Application v{VERSION} here</h3>
                <br />
                <Link to={"/test"}>click me</Link>
              </>
            }
          />
          <Route
            path="/test"
            element={
              <>
                <p>Sub route /test here</p>
                <br />
                <Link to={"/"}>Go Back</Link>
                <br />
                <button onClick={() => window.location.reload()}>reload</button>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
