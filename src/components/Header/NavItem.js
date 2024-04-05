import { useRootContext } from "@/context/context";
import { useRouter } from "next/router";
import React from "react";
import Link from "../Reuseable/Link";

const NavItem = ({ navItem = {}, mobile = false, activeId, handleActive }) => {
  const { pathname } = useRouter();
  const { toggleMenu } = useRootContext();

  const { name, href, icon, subNavItems = [], id } = navItem;

  const handleExpand = () => {
    if (mobile && href) {
      toggleMenu(false);
    } else if (mobile) {
      handleActive?.(id);
    }
  };

  let current = pathname === href;
  if (!current) {
    current = subNavItems.find((item) => item.href === pathname);
  }
  const active = id === activeId;

  return (
    <li>
      <a
        className={current ? "active" : ""}
        onClick={handleExpand}
        href={href}
      >
        <i className={icon}></i> {" "} {name}{" "}
        {mobile && subNavItems.length > 0 && (
          <span className="menu-expand">
            <i className="fa fa-angle-down"></i>
          </span>
        )}
      </a>
      {subNavItems.length > 0 && (
        <ul className={`sub-menu ${mobile && !active ? "d-none" : "d-block"}`}>
          {subNavItems.map(({ href, name, id }) => (
            <li key={id}>
              <a onClick={() => mobile && toggleMenu(false)} href={href}>
               {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
