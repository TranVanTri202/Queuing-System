import { useState } from "react";
import logo from "../../assets/imgs/img-icon/Logoalta.png";
import "../../assets/styles/menu.css";
import { Link, useNavigate } from "react-router-dom";
import IconDashboard from "../../assets/imgs/img-icon/IconDashboard";
import IconMonitor from "../../assets/imgs/img-icon/IconMonitor";
import IconChat from "../../assets/imgs/img-icon/Iconchat";
import IconCapso from "../../assets/imgs/img-icon/IconCapso";
import IconSetting from "../../assets/imgs/img-icon/IconSetting";
const Menu = () => {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState<number | null>(0);
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    setActiveIcon(index);
  };
  const handleLogout = () => {
    localStorage.removeItem("account");
    navigate("/");
  };
  return (
    <>
      <div className="logo-dashboard">
        <img src={logo} alt="" />
      </div>
      <div className="list-menu">
        <ul>
          <Link to="/home" className="link-style">
            <li
              className={activeItem === 0 ? "active" : ""}
              onClick={() => handleItemClick(0)}
            >
              <IconDashboard active={activeIcon} /> Dashboard
            </li>
          </Link>
          <Link to="/device" className="link-style">
            <li
              className={activeItem === 1 ? "active" : ""}
              onClick={() => handleItemClick(1)}
            >
              <IconMonitor active={activeIcon} />
              Thiết bị
            </li>
          </Link>
          <Link to="/service" className="link-style">
            <li
              className={activeItem === 2 ? "active" : ""}
              onClick={() => handleItemClick(2)}
            >
              <IconChat active={activeIcon} />
              Dịch vụ
            </li>
          </Link>
          <Link to="/provide" className="link-style">
            <li
              className={activeItem === 3 ? "active" : ""}
              onClick={() => handleItemClick(3)}
            >
              <IconCapso active={activeIcon} />
              Cấp số
            </li>
          </Link>
          <Link to="/announce" className="link-style">
            <li
              className={activeItem === 4 ? "active" : ""}
              onClick={() => handleItemClick(4)}
            >
              <i
                className="bi bi-file-earmark-bar-graph"
                style={{ fontSize: "18px" }}
              ></i>
              Báo cáo
            </li>
          </Link>

          <Link className="link-style" to="/Account">
            <li
              className={activeItem === 5 ? "active" : ""}
              onClick={() => handleItemClick(5)}
            >
              <i className="bi bi-person-fill-gear"></i>
              Quản lý tài khoản
            </li>
          </Link>
          <Link className="link-style" to="/Diary">
            <li
              className={activeItem === 6 ? "active" : ""}
              onClick={() => handleItemClick(6)}
            >
              <i className="bi bi-journal-medical"></i>
              Nhật kí người dùng
            </li>
          </Link>
        </ul>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
          Đăng xuất
        </button>
      </div>
    </>
  );
};

export default Menu;
