import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fistLetterCapitalize(letter: string) {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
}
