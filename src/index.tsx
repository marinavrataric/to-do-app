import React from "react";
import ReactDOM from "react-dom";

const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <p>
    Hello world,
    {message}
  </p>
);

ReactDOM.render(
  <App message="Hello oooo   oo aa" />,
  document.getElementById("root")
);
