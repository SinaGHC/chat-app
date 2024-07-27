import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

export default router;
