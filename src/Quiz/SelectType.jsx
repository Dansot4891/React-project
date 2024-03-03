import React,{createContext} from "react";

const SelectType = createContext({
    Type: 'Subjective',
  });
    SelectType.displayName = "SelectType";

export default SelectType;