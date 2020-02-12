import React from "react";
import Form from "./form";

let isLogged = false;

function App() {
  return (
    <div className="container">{isLogged ? <h1>Hello</h1> : <Form />}</div>
  );
}

export default App;
