import { useTranslation } from "react-i18next";
import "./Title.scss";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="title-wrapper">
      <span className="title">{t("library:documents")}</span>
      {/* <input className="finder-input"/>
      <img src="/library/finder.svg" alt="finder" /> */}
    </div>
  )
};

export default Title;