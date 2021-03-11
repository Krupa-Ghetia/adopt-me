import { StrictMode } from "react";
import ReactDom from "react-dom";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDom.render(
  <StrictMode>
    <App />{" "}
  </StrictMode>,
  document.getElementById("root")
);
