import logo from "../../assets/imgs/img-icon/Logoalta.png";
import imgFrame from "../../assets/imgs/img-icon/Frame.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Newpassword = () => {
  const [type, setType] = useState<boolean>(true);
  const [typeNewpassword, setTypeNewpassword] = useState<boolean>(true);
  const handleChangeType = () => {
    setType(!type);
  };
  const handleChangeTypeNewPassWord = () => {
    setTypeNewpassword(!typeNewpassword);
  };
  return (
    <div className="login-page">
      <div className="login">
        <div className="logo-media">
          <img src={logo} alt="logo-media" />
        </div>
        <div className="label-forgot">
          <h2>Đặt lại mật khẩu mới</h2>
        </div>
        <div className="password">
          <div>
            <span>Mật khẩu *</span> <br />
            <input type={type ? "password" : "text"} />
            <i
              onClick={handleChangeType}
              className={
                type ? "icon-eye bi bi-eye-slash" : "icon-eye bi bi-eye"
              }
              style={{ top: "60%" }}
            ></i>
          </div>
        </div>
        <div className="password">
          <div>
            <span>Nhập lại mật khẩu *</span> <br />
            <input type={typeNewpassword ? "password" : "text"} />
            <i
              onClick={handleChangeTypeNewPassWord}
              className={
                typeNewpassword
                  ? "icon-eye bi bi-eye-slash"
                  : "icon-eye bi bi-eye"
              }
              style={{ top: "60%" }}
            ></i>
          </div>
        </div>

        <div className="btn-footer">
          <Link to="/">
            <button className="btn-continue">Xác nhận</button>
          </Link>
        </div>
      </div>
      <div className="banner">
        <img className="img-frame" src={imgFrame} alt="" />
      </div>
    </div>
  );
};

export default Newpassword;
