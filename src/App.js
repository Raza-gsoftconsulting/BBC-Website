import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { deepOrange, purple } from "@material-ui/core/colors";
import { Paper } from "@material-ui/core";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Components/Home";
import AddNews from "./Components/AddNews";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import Error from "./Components/Error";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      type: darkMode ? "light" : "dark",
      primary: deepOrange,
      secondary: purple,
    },
    typography: {
      fontFamily: "roboto",
      fontWeightLeft: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightLight: 700,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<SharedLayout user={user} setUser={setUser} />}
              >
                <Route
                  index
                  element={
                    <Home
                      check={darkMode}
                      change={() => setDarkMode(!darkMode)}
                    />
                  }
                ></Route>
                {user !== null && (
                  <Route
                    path="/AddNews"
                    element={
                      <ProtectedRoutes user={user}>
                        <AddNews />
                      </ProtectedRoutes>
                    }
                  />
                )}
                <Route path="/SignIn" element={<SignIn setUser={setUser} />} />
                <Route
                  path="/SignOut"
                  element={<SignOut setUser={setUser} />}
                />
                <Route path="/News" element={<Home />} />
                <Route path="/Sports" element={<Home />} />
                <Route path="/Reels" element={<Home />} />
                <Route path="/WorkLife" element={<Home />} />
                <Route path="/Travel" element={<Home />} />
                <Route path="/Future" element={<Home />} />
                <Route path="/Culture" element={<Home />} />
                <Route path="*" element={<Error />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
