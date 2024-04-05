import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import HeaderInfo from "./HeaderInfo";
import HeaderMenu from "./HeaderMenu";
import SearchIcon from "./SearchIcon";

const BottomHeader = ({
  logo,
  navItems = [],
  icon,
  phone = "",
  socials,
  searchColor,
}) => {
  return (
    <Row style={{marginTop: '25%'}}>
      <Col lg={8} sm={9} xs={9}>
            <div className="search-popup__content">
                <form>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search Here..."
                    required
                />
                </form>
            </div>
      </Col>
      <Col lg={3} sm={3} xs={3}>
        <div className="notificationIcon">
            <i className="fa fa-bell"></i>
        </div>
      </Col>
    </Row>
  );
};

export default BottomHeader;
