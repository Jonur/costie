import c from "classnames";
import { twMerge } from "tailwind-merge";

const classNames = (...inputs: Parameters<typeof c>) => twMerge(c(...inputs));

export default classNames;
