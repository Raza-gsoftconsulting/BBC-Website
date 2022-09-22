import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ten from "../Translations/en/TranslationPage.json";
import tar from "../Translations/ar/TranslationPage.json";
import tchi from "../Translations/chi/TranslationPage.json";
import tudr from "../Translations/udr/TranslationPage.json";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

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

const useStyles = makeStyles({});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = ({ check, change }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/data");
        if (response.status === 200) {
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);
  console.log("data", data);
  if (data.length === 0) {
    return <div></div>;
  }

  const handle = () => {
    navigation("/AddNews");
  };
  return (
    <div className="fbg">
      <Button
        className="trans"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {t("Translation")}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={changeLanguage("en")}
          >
            English
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={changeLanguage("chi")}
          >
            Chinese
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={changeLanguage("ar")}
          >
            Arabic
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={changeLanguage("udr")}
          >
            Urdu
          </Button>
        </MenuItem>
      </Menu>
      <Switch
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        onChange={change}
        checked={check}
      ></Switch>
      {isLoading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className="module-header">
          <span>{t("Welcome to BBC.com")}</span>
          {t("Monday, 19 September. 2022")}
        </div>
      )}
      <Toolbar>
        <Box className="main-box">
          <section>
            <h2 className="h2-text"> → {t("News")}</h2>
          </section>
          <section className="box-section">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <Item className="block">
                  <div {...data[0].id}>
                    <img className="block-img" src={data[0].image} alt=""></img>
                  </div>
                </Item>
              </Grid>
              {data.map((news, index) => {
                if (index === 1) {
                  return (
                    <Grid item lg={3}>
                      <Item className="block1">
                        <div {...data[1].id}>
                          <img
                            className="block1-img"
                            src={data[1].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 2) {
                  return (
                    <Grid item lg={3}>
                      <Item className="block1">
                        <div {...data[2].id}>
                          <img
                            className="block1-img"
                            src={data[2].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 3) {
                  return (
                    <Grid item lg={3}>
                      <Item className="block2">
                        <div {...data[3].id}>
                          <img
                            className="block1-img"
                            src={data[3].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 4) {
                  return (
                    <Grid item lg={3}>
                      <Item className="block2">
                        <div {...data[4].id}>
                          <img
                            className="block1-img"
                            src={data[4].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
            </Grid>
            <br />
            <Button color="secondary" variant="contained" onClick={handle}>
              {t("Add More Grid")}
            </Button>
          </section>
          <section>
            <h2 className="h2-text"> → {t("Sports")}</h2>
          </section>
          <section className="box-section">
            <Grid container spacing={2}>
              {data.map((news, index) => {
                if (index === 5) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[5].id}>
                          <img
                            className="block3-img"
                            src={data[5].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 6) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[6].id}>
                          <img
                            className="block3-img"
                            src={data[6].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 7) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[7].id}>
                          <img
                            className="block3-img"
                            src={data[7].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
            </Grid>
            <br />
            <Button color="primary" variant="contained" onClick={handle}>
              {t("Add More Grid")}
            </Button>
          </section>
          <section>
            <h2 className="h2-text"> → {t("Entertainment")}</h2>
          </section>
          <section className="box-section">
            <Grid container spacing={2}>
              {data.map((news, index) => {
                if (index === 8) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[8].id}>
                          <img
                            className="block3-img"
                            src={data[8].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 9) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[9].id}>
                          <img
                            className="block3-img"
                            src={data[9].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 10) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[10].id}>
                          <img
                            className="block3-img"
                            src={data[10].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
            </Grid>
            <br />
            <Button color="secondary" variant="contained" onClick={handle}>
              {t("Add More Grid")}
            </Button>
          </section>
          <section>
            <h2 className="h2-text"> → {t("Movies")}</h2>
          </section>
          <section className="box-section">
            <Grid container spacing={2}>
              {data.map((news, index) => {
                if (index === 11) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[11].id}>
                          <img
                            className="block3-img"
                            src={data[11].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 12) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[12].id}>
                          <img
                            className="block3-img"
                            src={data[12].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
              {data.map((news, index) => {
                if (index === 13) {
                  return (
                    <Grid item lg={4}>
                      <Item className="block3">
                        <div {...data[13].id}>
                          <img
                            className="block3-img"
                            src={data[13].image}
                            alt=""
                          ></img>
                        </div>
                      </Item>
                    </Grid>
                  );
                }
              })}
            </Grid>
            <br />
            <Button color="primary" variant="contained" onClick={handle}>
              {t("Add More Grid")}
            </Button>
          </section>
        </Box>
      </Toolbar>
    </div>
  );
};

export default Home;
