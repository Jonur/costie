export const CurrencySymbol = ["$", "€", "£", "¥", "₹"] as const;

export type CurrencySymbol = (typeof CurrencySymbol)[number];
