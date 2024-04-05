import React from "react";
import { Link } from "react-scroll";

const Social = ({ socials = [] }) => {
  return (
    <div className="social">
      <ul>
        {socials.map(({ id, icon, href }) => (
          <li key={id}>
            <a href={href} >
            {/* <a> */}
              <i className={icon}></i>
            {/* </a> */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
