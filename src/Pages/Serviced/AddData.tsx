import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link } from "react-router-dom";
import "../../assets/styles/addData.css";
const AddDataService = () => {
  return (
    <>
      <div className="navtop">
        <div className="heading-navtop">
          <span>Dịch vụ</span>
          <i className="bi bi-chevron-right"></i>
          <span>Thêm Dịch vụ</span>
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
      <h2 className="heading-text">Quản lí dịch vụ</h2>
      <div className="search-table-add-detail">
        <div className="addData">
          <h2>Thông tin dịch vụ</h2>
          <div className="input-info-add">
            <div className="input-row1-add">
              <div className="name-input-add">
                <label htmlFor="">Mã dịch vụ:</label>{" "}
                <span className="dausao">*</span>
                <input type="text" />
                <label htmlFor="">Tên dịch vụ:</label>
                <span className="dausao">*</span>
                <input type="text" />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mô tả:</label>
                <span className="dausao">*</span> <br />
                <textarea name="" id="" cols={70} rows={7} />
              </div>
            </div>
            <h2 className="heading-text">Quy tắc cấp số</h2>
            <div className="quitat">
              <div className="input-choose">
                <input type="checkbox" />{" "}
                <label htmlFor="">Tăng tự động từ:</label> <br />
                <input type="checkbox" />
                <label htmlFor="">Prefix:</label>
                <br />
                <input type="checkbox" />
                <label htmlFor="">Surfix:</label>
                <br />
                <input type="checkbox" />
                <label htmlFor="">Reset mỗi ngày</label>
              </div>
              <div className="">
                <button>001</button> đến <button>001</button>
                <br />
                <button>001</button> <br />
                <button>001</button>
              </div>
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

          <button className="btn-login">Thêm thiết bị</button>
        </div>
      </div>
    </>
  );
};

export default AddDataService;
