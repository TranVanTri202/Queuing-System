import Login from "../Pages/LoginPage/Login";
import ForgotPassword from "../Pages/ForgotPasswordPage/ForgotPassword";
import Newpassword from "../Pages/NewPassword/NewPassword";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Serviced/Service";
import Device from "../Pages/Device/Device";
import Announce from "../Pages/Announce/Announce";
import Provide from "../Pages/Provide/ProvideNumber";
import Information from "../Pages/Information/Information";
import DetailDevice from "../Pages/Device/DetailDevice";
import AddDataDevice from "../Pages/Device/AddDataDevice";
import UpdateData from "../Pages/Device/UpdateData";
import AddDataService from "../Pages/Serviced/AddData";
export const RoutePages = [
  {
    path: "/",
    component: Login,
    route: "login",
  },

  {
    path: "/forgotPassword",
    component: ForgotPassword,
    route: "login",
  },
  {
    path: "/NewPassword",
    component: Newpassword,
    route: "login",
  },
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
  {
    path: "device/detail/:id",
    component: DetailDevice,
  },
  {
    path: "/addDataDevice",
    component: AddDataDevice,
  },
  {
    path: "/addDataService",
    component: AddDataService,
  },
  {
    path: "/updateData",
    component: UpdateData,
  },
];
