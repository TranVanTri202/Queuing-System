import Login from "../Pages/LoginPage/Login";
import ForgotPassword from "../Pages/ForgotPasswordPage/ForgotPassword";
import Newpassword from "../Pages/NewPassword/NewPassword";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Serviced/Service";
import Device from "../Pages/Device/Device";
import Announce from "../Pages/Announce/Announce";
import Provide from "../Pages/Provide/ProvideNumber";
import Information from "../Pages/Information/Information";
export const RouteLogin = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/NewPassword",
    component: Newpassword,
  },
];

export const RouteAdmin = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/service",
    component: Service,
  },
  {
    path: "/device",
    component: Device,
  },
  {
    path: "/Announce",
    component: Announce,
  },
  {
    path: "/provide",
    component: Provide,
  },
  {
    path: "/infomation",
    component: Information,
  },
];
