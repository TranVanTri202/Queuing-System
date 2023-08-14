import { useState } from "react";
import logo from "../../assets/imgs/Logoalta.png";
import "../../assets/styles/menu.css";
import { Link, useNavigate } from "react-router-dom";
import IconDashboard from "../../assets/imgs/IconDashboard";
import IconMonitor from "../../assets/imgs/IconMonitor";
import IconChat from "../../assets/imgs/Iconchat";
import IconCapso from "../../assets/imgs/IconCapso";
import IconSetting from "../../assets/imgs/IconSetting";
const Menu = () => {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState<number | null>(0);
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    setActiveIcon(index);
  };
  const handleLogout = () => {
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
          <li
            className={activeItem === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            <IconSetting active={activeIcon} />
            Cài đặt hệ thống
          </li>
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
