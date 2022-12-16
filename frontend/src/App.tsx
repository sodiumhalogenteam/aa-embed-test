import { useState } from "react";
import "./App.css";
import { VERSION } from "./VERSION";
interface AppProps {
  user: { userId: string };
}
function App(props: AppProps) {
  return (
    <div className="App">
      Inner app: USER_ID 👉 {props.user.userId}
      <div>v{VERSION}</div>
    </div>
  );
}

export default App;
