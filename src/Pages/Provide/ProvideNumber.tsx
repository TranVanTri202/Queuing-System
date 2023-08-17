import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link } from "react-router-dom";
import btnAdd from "../../assets/imgs/btnaddCapso.png";
import TableData from "./TableData";

const Provide = () => {
  return (
    <div className="main">
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
      <h2 className="heading-text">Quản lí cấp số</h2>
      <div className="search-table-add">
        <div className="table-left">
          <div className="search">
            <div className="search-left">
              <div className="item-1">
                <label htmlFor="">Trạng thái hoạt động</label> <br />
                <select name="" id="">
                  <option value="">Tất cả</option>
                  <option value="">Hoạt động</option>
                  <option value="">Ngưng hoạt động</option>
                </select>
              </div>
              <div className="item-2">
                <label htmlFor="">Trạng thái kết nối</label> <br />
                <select name="" id="">
                  <option value="">Tất cả</option>
                  <option value="">Kết nối</option>
                  <option value="">Mất kết nối</option>
                </select>
              </div>
            </div>
            <div className="search-right">
              <label htmlFor="">Từ khóa</label>
              <br />
              <div className="input-search">
                <input type="text" placeholder="Nhập từ khóa" />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="table-data">
            <TableData />
          </div>
        </div>
        <div>
          <Link to="/provide/addNumber">
            <img className="add-btn" src={btnAdd} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Provide;
