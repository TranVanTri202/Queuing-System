import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import btnUpdate from "../../assets/imgs/iconBack.png";
import "../../assets/styles/detail.css";
import { ChangeEvent, useState } from "react";
import ModalAdd from "./Modal";
const AddNumber = () => {
  const [modal, setModal] = useState<boolean>(false);
  const openModal = () => {
    setModal(true);
  };
  const [dichVu, setDichvu] = useState<string>();
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleChangeDichVu = (e: ChangeEvent<HTMLSelectElement>) => {
    setDichvu(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="navtop">
        <div className="heading-navtop">
          <span>Thiết bị</span>
          <i className="bi bi-chevron-right"></i>
          <span>Danh sách cấp số</span>
          <i className="bi bi-chevron-right"></i>
          <span>Chi tiết</span>
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
      <div className="search-table-add-detail">
        <div className="detail">
          <h1>Cấp số mới</h1>
          <span className="dichvu-add">Dịch vụ khách hàng lựa chọn</span>
          <div className="item-select">
            <select name="" id="" onChange={handleChangeDichVu}>
              <option value="">--Chọn dịch vụ--</option>
              <option value="Khám tim mạch">Khám tim mạch</option>
              <option value="Khám sản phụ khoa">Khám sản phụ khoa</option>
              <option value="Khám răng hàm mặt">Khám răng hàm mặt</option>
              <option value="Khám tai mũi họng">Khám tai mũi họng</option>
            </select>
          </div>
          <div className="btn-choose" style={{ marginTop: "45px" }}>
            <div className="btn">
              <Link to="/provide">
                {" "}
                <button>Hủy bỏ</button>
              </Link>
              <button className="btn-login" onClick={openModal}>
                In số
              </button>
            </div>
          </div>
        </div>
        <div className="add-btn-detail">
          <img
            onClick={() => navigate(`/provide`)}
            className="icon-detail"
            src={btnUpdate}
            alt=""
          />
        </div>
      </div>
      <ModalAdd dichVu={dichVu!} open={modal} onClose={handleCloseModal} />
    </div>
  );
};

export default AddNumber;
