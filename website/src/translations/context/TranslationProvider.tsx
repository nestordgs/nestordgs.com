import React, { ReactNode, useReducer } from "react";
import { types } from "../types/types";
import { translateReducer } from "./translateRreducer";
import { TranslationConext } from "./TranslationsContext";

interface ITranslateProviderProps {
  children: ReactNode;
}

const init = () => {
  return {
    language: "en",
  };
};

export const TranslationProvider: React.FC<ITranslateProviderProps> = ({
  children,
}) => {
  const [translateState, dispatch] = useReducer(translateReducer, {}, init);

  const changeLanguage = (language: string) => {
    const action = {
      type: types.changeLanguage,
      payload: language,
    };

    localStorage.setItem("language", language);
    dispatch(action);
  };

  return (
    <TranslationConext.Provider
      value={{
        ...translateState,

        // Methods
        changeLanguage,
      }}
    >
      {children}
    </TranslationConext.Provider>
  );
};
