import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import HeaderInfo from "./HeaderInfo";
import HeaderMenu from "./HeaderMenu";

const MainHeaderMobile = ({
  logo,
  navItems = [],
  icon,
  phone = "",
  socials,
  searchColor,
}) => {
  return (
    <Row className="bannermobile">
      <Col lg={12}>
        <div className="main-header-item">
          <div className="main-header-menus d-flex justify-content-between align-items-center">
            
            <HeaderMenu navItems={navItems} />
            <HeaderInfo
              icon={icon}
              phone={phone}
              socials={socials}
              searchColor={searchColor}
            />

            <div className="header-logo">
              <Link href="/">
                <Image src={logo.src} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainHeaderMobile;
