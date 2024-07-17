import React from "react";
import { login } from "./api/login";
import Main from "./pages/main";
function App() {
  return (
    <div className="app">
      <Main />
      <button onClick={login}>fhrmdls</button>
    </div>
  );
}

export default App;
