import AuthLayout from "@/layouts/AuthLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { urlRoute } from "./routes";
import LoginPage from "@/pages/auth/login/Login";
import SignUpPage from "@/pages/auth/sign-up/Sigup";
import FogotPasswordPage from "@/pages/auth/forgot-password/ForgotPassword";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={urlRoute.LOGIN} element={<LoginPage />} />
          <Route path={urlRoute.SIGNUP} element={<SignUpPage />} />
          <Route path={urlRoute.FORGOT_PASSWORD} element={<FogotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
