export const Language = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  el: "Ελληνικά",
  it: "Italiano",
  dk: "Dansk",
  mg: "Magyar",
  pt: "Português",
} as const;

export type Language = (typeof Language)[keyof typeof Language];
export type LanguageCode = keyof typeof Language;
