import React from "react";
import FooterBottom from "./footerButtom/FooterButtom";
import FooterContent from "./footerContent/FooterContent";
import Socials from "./socials/Socials";
import "./Footer.css";

function Footer() {
  return (
    <>
      <FooterContent />
      <Socials />
      <FooterBottom />
    </>
  );
}

export default Footer;
