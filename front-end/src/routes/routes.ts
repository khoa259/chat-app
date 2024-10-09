export const urlRoute = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE: "/profile",
  HOME: "/",
  MESSAGE: "/message",
  MESSAGEID: (id: number) => `/message/${id}`,
  NOT_FOUND: "/not-found",
};
