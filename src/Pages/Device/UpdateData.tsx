import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link } from "react-router-dom";
import "../../assets/styles/addData.css";
const UpdateData = () => {
  return (
    <>
      <div className="navtop">
        <div className="heading-navtop">
          <span>Thiết bị</span>
          <i className="bi bi-chevron-right"></i>
          <span>Cập nhật thiết bị</span>
        </div>
        <div className="notification-avatar">
          <img src={iconNotification} className="notifi" alt="" />

          <Link to="/infomation" className="link-style">
            <div className="infomation">
              <div className="avatar">
                <img src={avatars} alt="" />
              </div>
              <div className="info">
                <span>Xin chào</span>
                <h3>Lê Thị Quỳnh Vân</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h2 className="heading-text">Quản lí thiết bị</h2>
      <div className="search-table-add-detail">
        <div className="addData">
          <h2>Thông tin thiết bị</h2>
          <div className="input-info-add">
            <div className="input-row1-add">
              <div className="name-input-add">
                <label htmlFor="">Tên người dùng:</label>{" "}
                <span className="dausao">*</span>
                <input type="text" />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Tên đăng nhập:</label>
                <span className="dausao">*</span>
                <input type="text" />
              </div>
            </div>
            <div className="input-row2-add">
              <div className="name-input-add">
                <label htmlFor="">Số điện thoại:</label>
                <span className="dausao">*</span>
                <input type="text" />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mật khẩu:</label>
                <span className="dausao">*</span>
                <input type="text" />
              </div>
            </div>
            <div className="input-row3-add">
              <div className="name-input-add">
                <label htmlFor="">Email:</label>
                <span className="dausao">*</span>
                <input type="text" />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Vai trò:</label>
                <span className="dausao">*</span>
                <input type="text" />
              </div>
            </div>
            <div className="input-row4-add">
              <label htmlFor="">Dịch vụ sử dụng</label>
              <input type="text" />
            </div>
            <div>
              <span className="lableth">
                <span className="dausao">*</span>Là trường hợp thông tin bắt
                buộc
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-footer">
        <div className="btn">
          <Link to="/device">
            {" "}
            <button>Hủy bỏ</button>
          </Link>
          <button className="btn-login">Cập nhật</button>
        </div>
      </div>
    </>
  );
};

export default UpdateData;
