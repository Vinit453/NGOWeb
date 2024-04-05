import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainHeaderItem from "./MainHeaderItem";
import Social from "./Social";
import MainHeaderMobile from "./MainHeaderMobile";

const { logo, navItems, phone, icon, email, address, socials } = headerData;

const Header = ({ className = "" }) => {
  const { scrollTop } = useScroll(160);

  return (
    <header className={`header-area ${className}`}>
      <div className={`main-header${scrollTop ? " sticky" : ""}`}>
        <Container>
          <MainHeaderItem
            logo={logo}
            navItems={navItems}
            icon={icon}
            phone={phone}
          />

          <MainHeaderMobile
             logo={logo}
             navItems={navItems}
             icon={icon}
            phone={phone}
          />
        </Container>
      </div>
    </header>
  );
};

export default Header;
