import { Link } from "react-router-dom";
import ConnectWallet from "../../components/layout/Navbar/ConnectWallet";
import "./Information.scss";
import { useTranslation } from "react-i18next";
import TraccyLogo from '../../assets/images/logo.png';

const Information = () => {
  const { t } = useTranslation();

  const Menus = [
    {
      label: "Home",
      link: "/home",
    },
    {
      label: "Trcy Token",
      link: "/traccy-token",
    },
    {
      label: "Trccy Impact",
      link: "/impact-through-traccy",
    },
    {
      label: t("library:aboutus"),
      link: "/about",
    },
    {
      label: t("library:become"),
      link: "/become-part",
    },
    {
      label: t("library:library"),
      linke: "/library"
    },
    {
      label: t("library:buy"),
      link: "/invest",
    },
  ]

  const Companies = [
    {
      label: "Contact Us",
      link: "#",
    },
    {
      label: t("library:documentations"),
      link: "#",
    },
  ]

  const Socials = [
    {
      label: "Facebook",
      link: "#",
    },
    {
      label: "Instagram",
      link: "#",
    },
    {
      label: "Twitter",
      link: "#",
    },
    {
      label: "Linkedin",
      link: "#",
    },
  ]
  return (
    <div className="information-wrapper">
      <div className="connect-wallet">
        <ConnectWallet />
      </div>
      <div className="web-menu">
        <span className="title">{t("library:website")}</span>
        {Menus.map(menu => <Link to={menu.link}>{menu.label}</Link>)}
      </div>
      <div className="web-menu">
        <span className="title">{t("library:company")}</span>
        {Companies.map(company => <Link to={company.link}>{company.label}</Link>)}
      </div>
      <div className="web-menu">
        <span className="title">Social Media</span>
        {Socials.map(social => <Link to={social.link}>{social.label}</Link>)}
      </div>
      <div className="logo">
        <img src={TraccyLogo} alt="logo" />
        <p>
          Using <br />
          Blockchain <br />
          Impactful
        </p>
      </div>
    </div>
  )
  // return (
  //   <div className="information-wrapper">
  //     <div className="function-title">
  //       <img src="/library/recent1.svg" alt="recent1" />
  //       <span>Recent Files</span>
  //     </div>
  //     <div className="splitter" />
  //     <img src="/library/file-preview.svg" className="preview" alt="preview" />
  //     <div className="splitter" />
  //     <div className="file-info">
  //       <span className="filename">Licence agreement on waterfall.world</span>
  //       <span className="filesize">18.98 MB, H1 B4, 45s</span>
  //     </div>
  //     <div className="splitter" />
  //     <div className="share-icon-wrapper">
  //       <img src="/library/share.svg" className="share-icon" alt="share" />
  //     </div>
  //     <span className="share">Share</span>
  //   </div>
  // )
}

export default Information;
