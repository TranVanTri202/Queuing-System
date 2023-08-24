import "./forgotPassword.css";
import logo from "../../assets/imgs/img-icon/Logoalta.png";
import imgFrame from "../../assets/imgs/img-icon/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchDataAcount } from "../../redux/Slice/AccountSlice";
import { message } from "antd";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [valueEmail, setValueEmail] = useState<string>(""); //lấy giấ trị email khi nhập
  const [messageApi, contextHolder] = message.useMessage(); // thanh thông báo
  const dispatch: AppDispatch = useDispatch();
  const dataAccount = useSelector(
    (state: RootState) => state.Account.dataAccount
  );
  const email = dataAccount.map((item) => item.email);

  const handleNextChangePassword = () => {
    if (email.includes(valueEmail)) {
      navigate(`/NewPassword/${encodeURIComponent(valueEmail)}`);
    } else {
      messageApi.open({
        type: "warning",
        content: "Email không hợp lệ",
      });
    }
  };

  useEffect(() => {
    dispatch(fetchDataAcount());
  }, [dispatch]);

  return (
    <div className="login-page">
      {contextHolder}
      <div className="login">
        <div className="logo-media">
          <img src={logo} alt="logo-media" />
        </div>
        <div className="label-forgot">
          <h2>Đặt lại mật khẩu</h2>
          <span>Vui lòng nhập email để đặt lại mật khẩu của bạn *</span> <br />
          <input type="text" onChange={(e) => setValueEmail(e.target.value)} />
        </div>
        <div className="btn-footer">
          <Link to="/">
            <button className="btn-close">Hủy</button>
          </Link>

          <button onClick={handleNextChangePassword} className="btn-continue">
            Tiếp tục
          </button>
        </div>
      </div>
      <div className="banner">
        <img className="img-frame" src={imgFrame} alt="" />
      </div>
    </div>
  );
};

export default ForgotPassword;
