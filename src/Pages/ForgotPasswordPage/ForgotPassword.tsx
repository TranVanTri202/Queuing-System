import "./forgotPassword.css";
import logo from "../../assets/imgs/Logoalta.png";
import imgFrame from "../../assets/imgs/Frame.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="login-page">
      <div className="login">
        <div className="logo-media">
          <img src={logo} alt="logo-media" />
        </div>
        <div className="label-forgot">
          <h2>Đặt lại mật khẩu</h2>
          <span>Vui lòng nhập email để đặt lại mật khẩu của bạn *</span> <br />
          <input type="text" />
        </div>
        <div className="btn-footer">
          <Link to="/">
            <button className="btn-close">Hủy</button>
          </Link>
          <Link to="/NewPassword">
            <button className="btn-continue">Tiếp tục</button>
          </Link>
        </div>
      </div>
      <div className="banner">
        <img className="img-frame" src={imgFrame} alt="" />
      </div>
    </div>
  );
};

export default ForgotPassword;
