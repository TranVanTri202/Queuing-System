import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import "../../assets/styles/info.css";
import avatar from "../../assets/imgs/avatar.png";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataAcount } from "../../redux/Slice/AccountSlice";
import imgCamera from "../../assets/imgs/Camera.png";
const Information = () => {
  const dispatch: AppDispatch = useDispatch();
  const dataAccount = useSelector(
    (state: RootState) => state.Account.dataAccount
  );

  useEffect(() => {
    dispatch(fetchDataAcount());
  }, [dispatch]);
  return (
    <div className="main">
      <div className="navtop">
        <div className="heading-navtop">
          <span>Thông tin cá nhân</span>
        </div>
        <div className="notification-avatar">
          <img src={iconNotification} className="notifi" alt="" />

          <div className="infomation">
            <div className="avatar">
              <img src={avatars} alt="" />
            </div>
            <div className="info">
              <span>Xin chào</span>
              <h3>Lê Thị Quỳnh Vân</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="form-info">
        <div className="avatar-name">
          <img src={avatar} alt="" />
          <img className="camera" src={imgCamera} alt="" />
          <h3>{dataAccount.map((item) => item.name)}</h3>
        </div>
        <div className="input-info">
          <div className="input-row1">
            <div className="name-input">
              <label htmlFor="">Tên người dùng:</label>
              <input
                type="text"
                value={dataAccount.map((item) => item.name)}
                disabled
              />
            </div>
            <div className="username-input">
              <label htmlFor="">Tên đăng nhập:</label>
              <input
                type="text"
                value={dataAccount.map((item) => item.username)}
                disabled
              />
            </div>
          </div>
          <div className="input-row2">
            <div className="name-input">
              <label htmlFor="">Số điện thoại:</label>
              <input
                type="text"
                value={dataAccount.map((item) => item.phoneNumber)}
                disabled
              />
            </div>
            <div className="username-input">
              <label htmlFor="">Mật khẩu:</label>
              <input
                type="text"
                value={dataAccount.map((item) => item.password)}
                disabled
              />
            </div>
          </div>
          <div className="input-row3">
            <div className="name-input">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                value={dataAccount.map((item) => item.email)}
                disabled
              />
            </div>
            <div className="username-input">
              <label htmlFor="">Vai trò:</label>
              <input
                type="text"
                value={dataAccount.map((item) => item.role)}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
