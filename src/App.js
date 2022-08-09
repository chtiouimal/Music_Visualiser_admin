import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import MvLayout from "./layout";
import { AuthPage } from "./pages";
import { mainNav } from "./utils/route.constant";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthPage />} />
      <Route path="app" element={<MvLayout />}>
        {mainNav.map((nav) => (
          <Route key={nav.id} path={nav.path} element={nav.element}>
            {nav.routes.length > 0 &&
              nav.routes.map((e, i) => <Route key={i} path={e} element={e} />)}
          </Route>
        ))}
      </Route>
      <Route path="" element={<Navigate to="auth" />} />
    </Routes>
  );
}

export default App;
