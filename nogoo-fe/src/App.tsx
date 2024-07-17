import React from "react";
import { useLogin } from "./api/users";
import Main from "./pages/main";
function App() {
  const [login] = useLogin();
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;
