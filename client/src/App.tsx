import { FC, useCallback, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageContext } from "./context/languageContext";
import { englishStrings, spanishStrings } from "./constants/strings";
import { get } from "lodash";
import useLocalStorage from "use-local-storage";
import LandingPage from "./landing-page/LandingPage";

const App: FC = () => {
  const [language, setLanguage] = useLocalStorage<"SPA" | "ENG">(
    "aldosolano_language",
    "SPA"
  );

  const displayText = useCallback(
    (key: keyof typeof spanishStrings) => {
      switch (language) {
        case "SPA":
          return get(spanishStrings, key, "");
        case "ENG":
          return get(englishStrings, key, "");
        default:
          return get(spanishStrings, key, "");
      }
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({ displayText, language, setLanguage }),
    [displayText, language, setLanguage]
  );

  return (
    <LanguageContext.Provider {...{ value: contextValue }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
