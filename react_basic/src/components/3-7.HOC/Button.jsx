import React from "react";
import withLoading from "./withLoading";

export function Button() {
  return <button>Button</button>;
}

export default withLoading(Button);
