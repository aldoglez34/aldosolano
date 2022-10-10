import { createContext, Dispatch, SetStateAction } from "react";

type LanguageContextType = {
  displayText: any;
  language: string;
  setLanguage: Dispatch<SetStateAction<"SPA" | "ENG" | undefined>>;
};

export const LanguageContext = createContext<LanguageContextType>({
  displayText: () => undefined,
  language: "SPA",
  setLanguage: () => undefined,
});
