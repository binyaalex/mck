import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
//icons
import HomeIcon from "@mui/icons-material/Home";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import { HiOutlineBuildingStorefront } from "react-icons/hi";
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import { FiHome } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
// import { IoRestaurantOutline } from "react-icons/io";
import { AiOutlineGift } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";


import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import chatIcon from "../../assets/images/footer/chat.png";

//components
import GrayIcon from "./GrayIcon";

import "./Footer.css";
import { useEffect, useState } from "react";
import {  useLocation } from 'react-router-dom'

const containerArr = [
  {
    img: <FiHome />,
    link: "/",
    title: "ראשי",
  },
  {
    img: <AiOutlineTags />,
    link: "",
    title: "טרם מומשו",
  },
  // {
  //   img: <DinnerDiningOutlinedIcon />,
  //   link: "",
  //   title: "מסעדות",
  // },
  {
    img: <BsWallet2 />,
    link: "/wallet",
    title: "ארנק",
  },
];

const Footer = () => {
  const location =  useLocation()
  const [url, setUrl] = useState();

  useEffect(() => {
      console.log(`You changed the page to: ${location.pathname}`)
      setUrl(location.pathname)
  }, [location]);
  
  return (
    <>
      {/* <BrowserView>
        <div className="webFooter">
          <div className="customizer border-left-blue-grey border-left-lighten-4">
            <div className="customizer-toggle box-shadow-3">
              {containerArr.map((el, i) => {
                return (
                  <Link to={el.link} key={i}>
                    {el.img}
                  </Link>
                );
              })}

              <Link to="#">
                <IoIosChatbubbles />
              </Link>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView> */}
      <div>
        <footer className="footer">
          <div className="sosAndGray">
            <div className="grayIcons" >
              {containerArr.map((el, i) => {
                return (
                  <GrayIcon
                    img={el.img}
                    i={i}
                    url={url}
                    key={i}
                    link={el.link}
                    title={el.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="mainChat">
            <img alt="" className="chat" src={chatIcon} />
          </div>
        </footer>
      </div>
      {/* </MobileView> */}
    </>
  );
};

export default Footer;
