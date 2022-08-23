import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MvLayout from "./layout";
import { AuthPage, SingleCollectionPage } from "./pages";
import { mainNav } from "./utils/route.constant";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("selected-nav") === undefined) {
      localStorage.setItem("selected-nav", "1");
    }

    if (localStorage.getItem("auth-token")) {
      setLoggedIn(true);
      navigate("app");
    }
  }, []);

  return (
    <Routes>
      <Route
        path="auth"
        element={<AuthPage setLoggedIn={() => setLoggedIn(true)} />}
      />
      {loggedIn && (
        <Route path="app" element={<MvLayout />}>
          {mainNav.map((nav) => (
            <Route
              exact
              key={nav.id}
              path={nav.path}
              element={nav.element}
            ></Route>
          ))}
          {/* <Route path="collections/:id" element={<SingleCollectionPage />} /> */}
        </Route>
      )}
      <Route path="" element={<Navigate to={loggedIn ? "app" : "auth"} />} />
    </Routes>
  );
}

export default App;
