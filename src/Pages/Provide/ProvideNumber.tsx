import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link } from "react-router-dom";

const Provide = () => {
  return (
    <>
      <div className="navtop">
        <div className="heading-navtop">
          <span>Cấp số</span>
          <i className="bi bi-chevron-right"></i>
          <span>Danh sách cấp số</span>
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
    </>
  );
};

export default Provide;
