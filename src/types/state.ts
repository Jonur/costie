import type { LanguageCode } from "./config";
import type { CurrencySymbol } from "./currency";

export type CostieView = "select-participants" | "add-salaries" | "timer-ready" | "timer-running" | "summary";

export interface CostieAppState {
  view: CostieView;
  languageCode: LanguageCode;
  currencySymbol: CurrencySymbol;
  participants: {
    options: number[];
    selected: number;
  };
  totalPerSecond: number;
}

export interface CostieAppStateCtx extends CostieAppState {
  updateCurrencySymbol: () => void;
  updateSelectedParticipants: (selected: number) => void;
  updateTotalPerSecond: (totalPerSecond: number) => void;
  updateView: (view: CostieView) => void;
  updateLanguageCode: (languageCode: LanguageCode) => void;
}
