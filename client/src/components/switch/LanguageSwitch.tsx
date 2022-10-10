import { FC, useContext, useMemo } from "react";
import Switch from "react-switch";
import Image from "react-bootstrap/Image";
import { LanguageContext } from "../../context/languageContext";
import { isEqual } from "lodash";

const mexico = require("../../images/mexico.png");
const usa = require("../../images/united-states.png");

type LanguageSwitchType = {
  className?: string;
};

export const LanguageSwitch: FC<LanguageSwitchType> = ({ className }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const isMexicoChecked = useMemo(() => isEqual(language, "SPA"), [language]);

  const handleChange = () => setLanguage(isMexicoChecked ? "ENG" : "SPA");

  return (
    <div {...{ className }}>
      <Switch
        checked={isMexicoChecked}
        checkedIcon={<Image alt="México" className="p-1" fluid src={mexico} />}
        className="react-switch"
        height={28}
        offColor="#586071"
        onChange={handleChange}
        onColor="#586071"
        uncheckedIcon={
          <Image alt="United States" className="p-1" fluid src={usa} />
        }
        width={56}
      />
    </div>
  );
};
