import { useState } from "react";

const useBoolean = (initialState = false) => {
  const [boolean, setBoolean] = useState(initialState);

  const setToFalse = () => {
    setBoolean(false);
  };

  const setToTrue = () => {
    setBoolean(true);
  };

  const toggleBoolean = () => {
    setBoolean((_boolean) => !_boolean);
  };

  return {
    boolean,
    toggleBoolean,
    setToTrue,
    setToFalse,
  };
};

export default useBoolean;
