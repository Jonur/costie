import { DICTIONARY } from "../constants";
import useCostieCtx from "./useCostieCtx";

const useTranslations = () => {
  const { languageCode } = useCostieCtx();

  const languageTranslations = DICTIONARY[languageCode];

  const t = (key: string): string => languageTranslations?.[key] || key;

  return { t };
};

export default useTranslations;
