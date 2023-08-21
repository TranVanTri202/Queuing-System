import "../../assets/styles/info.css";

import imgCamera from "../../assets/imgs/img-icon/Camera.png";
import Navtop from "../../components/Route/Navtop";
const Information = () => {
  const storedAccount = localStorage.getItem("account");
  if (storedAccount) {
    var account = JSON.parse(storedAccount);
  }
  const img = require(`../../${account.image}`);
  return (
    <div className="main">
      <Navtop labelFirst="" lableSecond="Thông tin cá nhân" />
      <div className="form-info">
        <div className="avatar-name">
          <img
            src={img}
            alt=""
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <img className="camera" src={imgCamera} alt="" />
          <h3>{account.name}</h3>
        </div>
        <div className="input-info">
          <div className="input-row1">
            <div className="name-input">
              <label htmlFor="">Tên người dùng:</label>
              <input type="text" value={account.name} disabled />
            </div>
            <div className="username-input">
              <label htmlFor="">Tên đăng nhập:</label>
              <input type="text" value={account.username} disabled />
            </div>
          </div>
          <div className="input-row2">
            <div className="name-input">
              <label htmlFor="">Số điện thoại:</label>
              <input type="text" value={account.phoneNumber} disabled />
            </div>
            <div className="username-input">
              <label htmlFor="">Mật khẩu:</label>
              <input type="text" value={account.password} disabled />
            </div>
          </div>
          <div className="input-row3">
            <div className="name-input">
              <label htmlFor="">Email:</label>
              <input type="text" value={account.email} disabled />
            </div>
            <div className="username-input">
              <label htmlFor="">Vai trò:</label>
              <input type="text" value={account.role} disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
