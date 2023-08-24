import { useNavigate, useParams } from "react-router-dom";
import btnUpdate from "../../assets/imgs/img-icon/iconUpdate.png";
import "../../assets/styles/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchDataDevice } from "../../redux/Slice/deviceSlice";
import Navtop from "../../components/Route/Navtop";
import { DeviceType } from "../../share/deviceInterface";
const DetailDevice = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); //lấy id trên thanh url để truy xuất
  const ditpatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Device.dataDevice);
  const [device, setDevice] = useState<DeviceType>();

  useEffect(() => {
    const detail = data.find((item) => item.id === id);
    setDevice(detail);
    ditpatch(fetchDataDevice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ditpatch]);

  return (
    <div className="main">
      <Navtop
        labelFirst="Thiết bị"
        lableSecond="Danh sách thiết bị"
        labelThird="Chi tiết thiết bị"
      />
      <h2 className="heading-text">Quản lí thiết bị</h2>
      <div className="search-table-add-detail">
        <div className="detail">
          <h3>Thông tin thiết bị</h3>
          <div className="info-detail">
            <div className="info-left">
              <label htmlFor="">Mã thiết bị</label>{" "}
              <span>{device?.maThietBi}</span> <br />
              <label htmlFor="">Tên thiết bị</label>{" "}
              <span>{device?.tenThietBi}</span> <br />
              <label htmlFor="">Địa chỉ IP</label>{" "}
              <span>{device?.diaChiIP}</span>
              <br />
            </div>
            <div className="info-right">
              <label htmlFor="">Loại thiết bị</label>{" "}
              <span>{device?.maThietBi}</span>
              <br />
              <label htmlFor="">Tên đăng nhập</label>{" "}
              <span>{device?.tenDangNhap}</span>
              <br />
              <label htmlFor="">Mật khẩu</label> <span>{device?.matKhau}</span>
              <br />
            </div>
          </div>
          <h4>Dịch vụ sử dụng</h4>
          <span>{device?.dichVu}</span>
        </div>
        <div className="add-btn-detail">
          <img
            onClick={() => navigate(`/updateDataDevice/${id}`)}
            className="icon-detail"
            src={btnUpdate}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DetailDevice;
