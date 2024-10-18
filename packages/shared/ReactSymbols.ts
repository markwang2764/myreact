const supportSymbol = typeof Symbol === "function" && Symbol.for ? true : false;

export const REACT_ELEMENT_TYPE = supportSymbol
  ? Symbol.for("react.element")
  : 0xeac7;
