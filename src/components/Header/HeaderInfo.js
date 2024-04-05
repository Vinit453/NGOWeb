import { useRootContext } from "@/context/context";
import React from "react";
import { Image } from "react-bootstrap";
import SearchIcon from "./SearchIcon";
import Social from "./Social";
import Link from "../Reuseable/Link";

const HeaderInfo = ({ socials, icon, phone = "", searchColor }) => {
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <div className="header-info d-flex align-items-center">
      
      {socials && <Social socials={socials} />}

      <div className="search d-none d-lg-block">
        
      </div>
      <div className="info d-none d-sm-block">
        <Link href="/">
          <Image src={icon.src} alt="" />
          {/* <span>Call Anytime</span> */}
          <h5 className="title">Login</h5>
        </Link>
      </div>
      <div
        onClick={toggleMenu}
        className="toggle-btn ml-10 canvas_open d-lg-none d-block"
      >
        <i className="fa fa-bars"></i>
      </div>
      <div>
          <h3 className="title" style={{fontWeight: '600', color: '#38b6ff', marginLeft: '25px' }}>Home</h3>
      </div>

    </div>
  );
};

export default HeaderInfo;
