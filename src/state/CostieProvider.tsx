import { useState, type PropsWithChildren } from "react";

import { DEFAULT_CURRENCY_SYMBOL, DEFAULT_LANGUAGE_CODE, MAX_PARTICIPANTS, MIN_PARTICIPANTS } from "../constants";
import { CurrencySymbol, type CostieAppState, type CostieView, type LanguageCode } from "../types";
import CostieContext from "./CostieContext";

const CostieProvider = ({ children }: PropsWithChildren) => {
  const [costieState, setCostieState] = useState<CostieAppState>({
    languageCode: DEFAULT_LANGUAGE_CODE,
    currencySymbol: DEFAULT_CURRENCY_SYMBOL,
    participants: {
      options: Array.from({ length: MAX_PARTICIPANTS - 1 }, (_, i) => i + 2),
      selected: MIN_PARTICIPANTS,
    },
    totalPerSecond: 0,
    view: "select-participants",
  });

  const updateCurrencySymbol = () => {
    const currentIndex = CurrencySymbol.indexOf(costieState.currencySymbol);
    const nextIndex = (currentIndex + 1) % CurrencySymbol.length;
    const newSymbol = CurrencySymbol[nextIndex];

    setCostieState(
      (prevState) =>
        ({
          ...prevState,
          currencySymbol: newSymbol,
        }) satisfies CostieAppState
    );
  };

  const updateSelectedParticipants = (selected: number) => {
    setCostieState(
      (prevState) =>
        ({
          ...prevState,
          participants: {
            ...prevState.participants,
            selected,
          },
          view: "add-salaries",
        }) satisfies CostieAppState
    );
  };

  const updateTotalPerSecond = (totalPerSecond: number) => {
    setCostieState(
      (prevState) =>
        ({
          ...prevState,
          totalPerSecond,
          view: "timer-ready",
        }) satisfies CostieAppState
    );
  };

  const updateView = (view: CostieView) => {
    setCostieState(
      (prevState) =>
        ({
          ...prevState,
          view,
        }) satisfies CostieAppState
    );
  };

  const updateLanguageCode = (languageCode: LanguageCode) => {
    setCostieState(
      (prevState) =>
        ({
          ...prevState,
          languageCode,
        }) satisfies CostieAppState
    );
  };

  return (
    <CostieContext.Provider
      value={{
        ...costieState,
        updateCurrencySymbol,
        updateSelectedParticipants,
        updateTotalPerSecond,
        updateView,
        updateLanguageCode,
      }}
    >
      {children}
    </CostieContext.Provider>
  );
};

export default CostieProvider;
