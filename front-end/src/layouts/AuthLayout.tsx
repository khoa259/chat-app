import { Outlet } from "react-router-dom";

import imageAuth from "../assets/images/auth-img.9302755e73810f6c27d2.png";

import Langues from "@/components/controls/Langues";
const AuthLayout = () => {
  const getYeard = new Date().getFullYear();

  return (
    <div className="bg-[var(--cl-green)] h-[100vh] p-8 relative">
      <div className="block lg:grid lg:grid-cols-[1fr_3fr]">
        <div className="lg:text-start lg:p-0 pb-8 text-center text-6xl font-bold text-slate-100">APP</div>
        <div className="bg-stone-50 rounded-lg lg:h-[calc(100vh-4rem)] min-w-80 shadow-lg ">
          <div className="flex flex-col h-full px-8 pt-8">
            <div className="flex justify-end items-center space-x-2">
              <Langues />
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="py-8 w-auto lg:min-w-[400px] text-center">
                <Outlet />
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="text-slate-400 mb-4 font-medium">© {getYeard}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block bottom-0 z-0">
        <img className="lg:w-[550px] " src={imageAuth} alt="image_auth" />
      </div>
    </div>
  );
};

export default AuthLayout;
