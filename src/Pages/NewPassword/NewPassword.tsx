import logo from "../../assets/imgs/img-icon/Logoalta.png";
import imgFrame from "../../assets/imgs/img-icon/Frame.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { updateAccount } from "../../redux/Slice/AccountSlice";
import { message } from "antd";
import { AccountType } from "../../share/accountInterface";

const Newpassword = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams(); //lấy id trên url để xử lú
  const data = useSelector((state: RootState) => state.Account.dataAccount);
  const [type, setType] = useState<boolean>(true);
  const [typeNewpassword, setTypeNewpassword] = useState<boolean>(true);
  const [passWord1, setPassword1] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage(); //thanh thông báo

  const handleChangeType = () => {
    setType(!type);
  };

  const handleChangeTypeNewPassWord = () => {
    setTypeNewpassword(!typeNewpassword);
  };
  const [dataInfo, setDataInfo] = useState<AccountType>({
    password: "",
  });

  const handleChangePassword = () => {
    if (passWord1 === dataInfo.password) {
      dispatch(updateAccount(dataInfo));
      messageApi.open({
        type: "success",
        content: `Thay đổi mật khẩu tài khoản ${dataInfo.name} thành công`,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      messageApi.open({
        type: "warning",
        content: "Mật khẩu chưa khớp",
      });
    }
  };

  useEffect(() => {
    const password = data.find((account) => account.email === id);
    setDataInfo(password!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="login-page">
      {contextHolder}
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
            <input
              onChange={(e) => setPassword1(e.target.value)}
              type={type ? "password" : "text"}
            />
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
            <input
              onChange={(e) =>
                setDataInfo((prev) => ({ ...prev, password: e.target.value }))
              }
              type={typeNewpassword ? "password" : "text"}
            />
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
          <button onClick={handleChangePassword} className="btn-continue">
            Xác nhận
          </button>
        </div>
      </div>
      <div className="banner">
        <img className="img-frame" src={imgFrame} alt="" />
      </div>
    </div>
  );
};

export default Newpassword;
