import React from "react";
import withLoading from "./withLoading";

export function Input() {
  return <input defaultValue="input" />;
}

export default withLoading(Input);
