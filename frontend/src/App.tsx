import { useState } from "react";
import "./App.css";
import { VERSION } from "./VERSION";
interface AppProps {
  user: { userId: string };
}
function App(props: AppProps) {
  return (
    <div className="App">
      Inner app here {props.user.userId}v{VERSION}
    </div>
  );
}

export default App;
