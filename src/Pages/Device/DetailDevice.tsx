import iconNotification from "../../assets/imgs/iconNotification.png";
import avatars from "../../assets/imgs/avatar.png";
import { Link, useParams } from "react-router-dom";
import btnUpdate from "../../assets/imgs/iconUpdate.png";
import "../../assets/styles/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { DeviceType, fetchDataDevice } from "../../redux/Slice/DeviceSlice";
const DetailDevice = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Device.dataDevice);
  const [device, setDevice] = useState<DeviceType>();
  useEffect(() => {
    const detail = data.find((item) => item.id === id);
    setDevice(detail);
    dispatch(fetchDataDevice());
  }, [id, data]);
  return (
    <>
      <div className="navtop">
        <div className="heading-navtop">
          <span>Thiết bị</span>
          <i className="bi bi-chevron-right"></i>
          <span>Chi tiết thiết bị</span>
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
        <div className="detail">
          <h3>Thông tin thiết bị</h3>
          <div className="info-detail">
            <div className="info-left">
              <label htmlFor="">Mã thiết bị</label> <span>{device?.id}</span>{" "}
              <br />
              <label htmlFor="">Tên thiết bị</label> <span>Kiosk</span> <br />
              <label htmlFor="">Địa chỉ IP</label> <span>192.168.10.1</span>
              <br />
            </div>
            <div className="info-right">
              <label htmlFor="">Loại thiết bị</label> <span>kiosk</span>
              <br />
              <label htmlFor="">Tên đăng nhập</label> <span>VanTri2708</span>
              <br />
              <label htmlFor="">Mật khẩu</label> <span>CMS</span>
              <br />
            </div>
          </div>
          <h4>Dịch vụ sử dụng</h4>
          <span>
            Khám tim mạch, khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi
            họng, Khám hô hấp, khám tổng quát
          </span>
        </div>
        <div className="add-btn-detail">
          <Link to="/updateData">
            <img className="icon-detail" src={btnUpdate} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailDevice;
