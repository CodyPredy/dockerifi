import React from "react";
import ReactDOM from "react-dom";

import Repo from "./Repo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Repo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
