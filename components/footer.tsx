import React from "react";
import { NavLogo } from "./nav/NavLogo";
import SocialIcons from "./SocialIcons";
import { NavLink } from "./nav/NavLink";

export const Footer = () => {
  const links = [
    { title: "shop", url: "/shop" },
    { title: "returns", url: "/returns" },
    { title: "about", url: "/about" },
    { title: "contact", url: "/contact" },
  ];

  return (
    <div className="footer-stitch paper bottom-0">
      <div className="tape-section"></div>
      <div className="footer w-full p-1 bg-primary shadow-top flex flex-col ">
        <div className="footer-components flex flex-row flex-wrap lg:justify-between justify-center lg:m-5 w-full">
          <NavLogo />
          <ul className="nav-menu flex flex-row flex-wrap gap-7 m-7 justify-center items-center">
            {links.map((link, key) => (
              <NavLink url={link.url} label={link.title} key={key} />
            ))}
          </ul>
          <SocialIcons />
        </div>

        <div className="copyright w-full flex justify-center mb-5">
          <p className="text-white text-center">
            Foldy Friends Inc. {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
