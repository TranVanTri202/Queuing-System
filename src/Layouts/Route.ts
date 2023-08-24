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
import UpdateDataDevice from "../Pages/Device/UpdateDataDevice";
import AddDataService from "../Pages/Serviced/AddData";
import DetailProvide from "../Pages/Provide/Detail";
import AddNumber from "../Pages/Provide/AddNumber";
import UpdateDataService from "../Pages/Serviced/UpdateDataService";
import Account from "../Pages/Account/Account";
import AddDataAccount from "../Pages/Account/AddData";
import UpdateAccount from "../Pages/Account/UpdateData";
import Diary from "../Pages/Diary/Diary";
import DetailService from "../Pages/Serviced/DetailService";
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
    path: "provide/detail/:id",
    component: DetailProvide,
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
    path: "/detailService/:id",
    component: DetailService,
  },
  {
    path: "/provide/addNumber",
    component: AddNumber,
  },
  {
    path: "/updateDataDevice/:id",
    component: UpdateDataDevice,
  },
  {
    path: "/updateDataService/:id",
    component: UpdateDataService,
  },
  {
    path: "/Account",
    component: Account,
  },
  {
    path: "/NewPassword/:id",
    component: Newpassword,
    route: "login",
  },
  {
    path: "/addDataAccount",
    component: AddDataAccount,
  },
  {
    path: "/UpdateAccount/:id",
    component: UpdateAccount,
  },
  {
    path: "/Diary",
    component: Diary,
  },
];
