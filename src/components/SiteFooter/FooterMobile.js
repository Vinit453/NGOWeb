import useScroll from "@/hooks/useScroll";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";


const FooterMobile = ({ className = "" }) => {
  const { scrollTop } = useScroll(160);

  return (
        <Container className="bottom-nav">
          <ul style={{display: 'flex'}}>
            <li>
                <Link href="/" className="active">
                    <i className="fa fa-home"></i>   
                    <br />
                    Home 
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className="fa fa-compass"></i>   
                    <br />
                    Explore 
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className="fa fa-check-circle-o"></i>   
                    <br />
                    Update 
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className="fa fa-line-chart"></i>   
                    <br />
                    Activity 
                </Link>
            </li>
            <li>
                <Link href="/">
                    <i className="fa fa-user-circle"></i>   
                    <br />
                    Profile 
                </Link>
            </li>
          </ul>
        </Container>
  );
};

export default FooterMobile;
