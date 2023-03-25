import { Link } from "react-router-dom";
import ConnectWallet from "../../components/layout/Navbar/ConnectWallet";
import "./Information.scss";

const Information = () => {
  return (
    <div className="information-wrapper">
      <div className="connect-wallet">
        <ConnectWallet />
      </div>
      <div className="web-menu">
        <span className="title">Website</span>
        {Menus.map(menu => <Link to={menu.link}>{menu.label}</Link>)}
      </div>
      <div className="web-menu">
        <span className="title">Company</span>
        {Companies.map(company => <Link to={company.link}>{company.label}</Link>)}
      </div>
      <div className="web-menu">
        <span className="title">Social Media</span>
        {Socials.map(social => <Link to={social.link}>{social.label}</Link>)}
      </div>
      <img src="/library/logo.png" className="logo" alt="logo"/>
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
    label: "About Us",
    link: "/about",
  },
  {
    label: "Become a part",
    link: "/become-part",
  },
  {
    label: "Buy Token",
    link: "/invest",
  },
]

const Companies = [
  {
    label: "Contact Us",
    link: "#",
  },
  {
    label: "Documentations",
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