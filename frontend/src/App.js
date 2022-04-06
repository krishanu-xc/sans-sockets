import "./App.css";
import React, { useState } from 'react';
import ChatPage from "./Pages/ChatPage";
import { HomePage } from "./Pages/HomePage";

function App() {
  const [logged, setLogged] = useState(false)

  return (
    <div className="App">
      {!logged ? <HomePage /> : <div>sign in plz</div>}
      {logged ? <ChatPage /> : <div>sign in plz</div>}
    </div>
  );
}

export default App;
