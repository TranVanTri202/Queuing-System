import "./login.css";
import img1 from "../../assets/imgs/img-icon/Group341.png";
import img2 from "../../assets/imgs/img-icon/quanly.png";
import logo from "../../assets/imgs/img-icon/Logoalta.png";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAcount } from "../../redux/Slice/AccountSlice";
import { Spin } from "antd";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const dataAccount = useSelector(
    (state: RootState) => state.Account.dataAccount
  );
  const [account, setAccount] = useState<boolean>(true);
  const [spin, setSpin] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeType = () => {
    setType(!type);
  };

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // eslint-disable-next-line array-callback-return
    const user = dataAccount.find(
      (account) =>
        account.username === userName && account.password === password
    );
    if (user) {
      setSpin(true);
      setAccount(true);
      setTimeout(() => {
        navigate("/home");
        localStorage.setItem("account", JSON.stringify(user)); // đăng nhập thành công thì đưa dữ liệu của người dùng vào     localStorage
      }, 1000);
    } else {
      setAccount(false);
    }
  };

  useEffect(() => {
    dispatch(fetchDataAcount());
    localStorage.removeItem("account");
  }, [dispatch]);
  return (
    <div className="login-page">
      <div className="login">
        <div className="logo-media">
          <img src={logo} alt="logo-media" />
        </div>
        <Spin size="large" spinning={spin}>
          <div className="userName">
            <div>
              <span>Tên đăng nhập *</span> <br />
              <input
                type="text"
                onChange={handleUserName}
                className={account ? "" : "error"}
              />
            </div>
          </div>
          <div className="password">
            <div>
              <span>Mật khẩu *</span> <br />
              <input
                type={type ? "password" : "text"}
                onChange={handlePassword}
                className={account ? "" : "error"}
              />
              {account ? (
                <Link to="/forgotPassword" className="link-style">
                  <span className="forgot-password">Quên mật khẩu?</span>
                </Link>
              ) : (
                <span className="span-error">
                  <i className="bi bi-exclamation-circle"></i>Sai mật khẩu hoặc
                  tên đăng nhập
                </span>
              )}
              <i
                onClick={handleChangeType}
                className={
                  type ? "icon-eye bi bi-eye-slash" : "icon-eye bi bi-eye"
                }
              ></i>
            </div>
          </div>
          <div className="btn-login">
            <button onClick={handleLogin}>Đăng nhập</button> <br />
            {!account ? (
              <Link to="/forgotPassword" className="link-style">
                <span className="span-error forgot-password">
                  Quên mật khẩu?
                </span>
              </Link>
            ) : (
              ""
            )}
          </div>
        </Spin>
      </div>
      <div className="banner">
        <img className="img1" src={img1} alt="" />
        <span>Hệ Thống</span>
        <img src={img2} className="img2" alt="" />
      </div>
    </div>
  );
};

export default Login;
