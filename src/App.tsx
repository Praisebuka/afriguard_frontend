import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
// import routes from "tempo-routes";
import { getActiveUser } from "./hooks/localstorage";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        {/* {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)} */}
      </>
    </Suspense>
  );
}

const PrivateRoute = () => {
  var activeUser = getActiveUser();
  if (activeUser == null) return <Navigate to="/login" />;
  return <Outlet />;
};

export default App;
