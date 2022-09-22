import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ten from "../Translations/en/TranslationPage.json";
import tar from "../Translations/ar/TranslationPage.json";
import tchi from "../Translations/chi/TranslationPage.json";
import tudr from "../Translations/udr/TranslationPage.json";
import Button from "@material-ui/core/Button";

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

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submitForm = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setUser({ email: email, password: password });
    navigate("/");
  };
  const handle = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className="container">
      <Button
        type="submit"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("en")}
      >
        English
      </Button>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("chi")}
      >
        Chinese
      </Button>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("ar")}
      >
        Arabic
      </Button>
      <Button
        type="submit"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={changeLanguage("udr")}
      >
        Urdu
      </Button>
      <form className="form-style" action="" onSubmit={submitForm}>
        <section className="sec1">
          <img
            className="img1"
            src="https://logos-world.net/wp-content/uploads/2021/07/BBC-New-Logo.png"
            alt=""
          ></img>
          <h2 className="h2-text1">{t("Sign In")}</h2>
        </section>
        <br />
        <section className="sec2">
          <div>
            <input
              className="input-text"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={t("Email or Username")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <input
              className="input-text"
              type="password"
              name="password"
              id="password"
              placeholder={t("Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
          </div>
          <button type="submit" className="btn1" onClick={handle}>
            {t("Sign In")}
          </button>
          <div>
            <div>{localStorage.getItem(email)}</div>
            <div>{localStorage.getItem(password)}</div>
          </div>
          <br />
          <br />
          <Link to="/" className="h4-text">
            {t("Need help to Signing in?")}
          </Link>
          <br />
          <br />
          <br />
          <h2>{t("Don't havea BBC Account?")}</h2>
          <br />
          <Link to="/" className="h4-text">
            {t("Register Now!")}
          </Link>
        </section>
      </form>
    </div>
  );
};

export default SignIn;
