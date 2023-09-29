import {
  createBrowserRouter,
} from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error from "../pages/Error/Error";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthenticationGuard from "../components/AuthenticationGuard/AuthenticationGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <AuthenticationGuard component={Dashboard} />
  }

]);

export default router