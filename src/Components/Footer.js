import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer1">
      <Box>
        <section className="sec-1">
          <h2>{t("Explore the BBC")}</h2>
        </section>
        <Box className="box-style3">
          <ul className="footer-container">
            <Link className="footer-text" to="/">{t("Home")}</Link>
            <Link className="footer-text" to="/News">{t("News")}</Link>
            <Link className="footer-text" to="/Sports">{t("Sports")}</Link>
            <Link className="footer-text" to="/Reels">{t("Reels")}</Link>
            <Link className="footer-text" to="/WorkLife">{t("WorkLife")}</Link>
          </ul>
          <ul className="footer-container">
          <Link className="footer-text" to="/Travel">{t("Travel")}</Link>
          <Link className="footer-text" to="/Future">{t("Future")}</Link>
          <Link className="footer-text" to="/Culture">{t("Culture")}</Link>
          <Link className="footer-text" to="/TV">{t("TV")}</Link>
          <Link className="footer-text" to="/Weather">{t("Weather")}</Link>
          </ul>
        </Box>
        <hr className="hr-style"></hr>
        <br />
        <h4 className="footer-h4">
          {t(
            "Copyright © 2022 BBC. The BBC is not responsible for the content of external sites. Read about our approach to external linking."
          )}
        </h4>
      </Box>
    </footer>
  );
};

export default Footer;
