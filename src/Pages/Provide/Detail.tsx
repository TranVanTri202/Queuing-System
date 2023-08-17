import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import btnUpdate from "../../assets/imgs/iconBack.png";
import "../../assets/styles/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import {
  ProvideNumberType,
  fetDataProvideNumber,
} from "../../redux/Slice/ProvideNumberSlice";
const DetailProvide = () => {
  const { id } = useParams<{ id: string }>();
  const ditpatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const [provide, setProvide] = useState<ProvideNumberType>();
  useEffect(() => {
    const detail = data.find((item) => item.id === id);
    setProvide(detail);
    ditpatch(fetDataProvideNumber());
  }, [id, data]);
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
          <h3>Thông tin thiết bị</h3>
          <div className="info-detail">
            <div className="info-left">
              <label htmlFor="">Họ tên</label>{" "}
              <span>{provide?.tenKhachHang}</span> <br />
              <label htmlFor="">Tên dịch vụ</label>{" "}
              <span>{provide?.tenDichVu}</span> <br />
              <label htmlFor="">Số thứ tự</label> <span>{provide?.stt}</span>
              <br />
              <label htmlFor="">Thời gian cấp</label>{" "}
              <span>{provide?.thoiGianBatDau}</span>
              <br />
              <label htmlFor="">Hạn sử dụng</label>{" "}
              <span>{provide?.thoiGianHetHan}</span>
              <br />
            </div>
            <div className="info-right">
              <label htmlFor="">Nguồn cấp</label>{" "}
              <span>{provide?.nguonCap}</span>
              <br />
              <label htmlFor="">Trạng thái</label>{" "}
              <span>{provide?.trangThai}</span>
              <br />
              <label htmlFor="">Số điện thoại</label> <span></span>
              <br />
              <label htmlFor="">Địa chỉ email</label> <span></span>
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
    </div>
  );
};

export default DetailProvide;
