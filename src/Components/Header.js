import React from "react";
import { Link, useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ten from "../Translations/en/TranslationPage.json";
import tar from "../Translations/ar/TranslationPage.json";
import tchi from "../Translations/chi/TranslationPage.json";
import tudr from "../Translations/udr/TranslationPage.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: ten,
    },
    chi: {
      translation: tchi,
    },
    ar: {
      translation: tar,
    },
    udr: {
      translation: tudr,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const changeLanguage = (lang) => {
  return () => {
    i18n.changeLanguage(lang);
  };
};

const Header = ({ user, setUser }) => {
  const navigation = useNavigate();
  const { t } = useTranslation();

  const handle = () => {
    setUser(null);
    navigation("/");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  return (
    <header className="header">
      <img
        className="img0"
        src="https://logos-world.net/wp-content/uploads/2021/07/BBC-New-Logo.png"
        alt=""
      ></img>
      {user !== null ? (
        <Link to="/SignOut" className="links" onClick={handle}>
          {t("Sign Out")}
        </Link>
      ) : (
        <Link to="/SignIn" className="links">
          {t("Sign In")}
        </Link>
      )}
      <Link to="/" className="links">
        {t("Home")}
      </Link>
      <Link to="/News" className="links">
        {t("News")}
      </Link>
      <Link to="/Sports" className="links">
        {t("Sports")}
      </Link>
      <Link to="/Reels" className="links">
        {t("Reels")}
      </Link>
      <Link to="/WorkLife" className="links">
        {t("WorkLife")}
      </Link>
      <Link to="/Travel" className="links">
        {t("Travel")}
      </Link>
      <Link to="/Future" className="links">
        {t("Future")}
      </Link>
      <Link to="/Culture" className="links">
        {t("Culture")}
      </Link>
      <Link to="/Culture" className="links">
        ....
      </Link>
      <input
        type="search"
        className="serach-bar"
        placeholder={t("Search BBC")}
      ></input>
    </header>
  );
};

export default Header;
