import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/addData.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { DeviceType, addDevice } from "../../redux/Slice/DeviceSlice";
import Navtop from "../../components/Route/Navtop";
const AddDataDevice = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [deviceInfo, setDeviceInfo] = useState<DeviceType>({
    maThietBi: "",
    tenThietBi: "",
    diaChiIP: "",
    tinhTrangHD: "Hoạt động",
    tinhTrangKN: "Kết nối",
    dichVu: "",
    loaiThietBi: "",
    tenDangNhap: "",
    matKhau: "",
  });

  const handleAdd = async () => {
    await dispatch(addDevice(deviceInfo));
    navigate("/device");
  };

  const handleInputChange = (field: string, value: string) => {
    setDeviceInfo({ ...deviceInfo, [field]: value });
  };

  return (
    <div className="main">
      <Navtop
        labelFirst="Thiết bị"
        lableSecond="Danh sách thiết bị"
        labelThird="Thêm thiết bị"
      />
      <h2 className="heading-text">Quản lí thiết bị</h2>
      <div className="search-table-add-detail">
        <div className="addData">
          <h2>Thông tin thiết bị</h2>
          <div className="input-info-add">
            <div className="input-row1-add">
              <div className="name-input-add">
                <label htmlFor="">Mã thiết bị</label>{" "}
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("maThietBi", e.target.value)
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Loại thiết bị</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("loaiThietBi", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="input-row2-add">
              <div className="name-input-add">
                <label htmlFor="">Tên thiết bị</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("tenThietBi", e.target.value)
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Tên đăng nhập</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("tenDangNhap", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="input-row3-add">
              <div className="name-input-add">
                <label htmlFor="">Địa chỉ IP</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("diaChiIP", e.target.value)
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mật khẩu:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) => handleInputChange("matKhau", e.target.value)}
                />
              </div>
            </div>
            <div className="input-row4-add">
              <label htmlFor="">Dịch vụ sử dụng</label>
              <input
                type="text"
                onChange={(e) => handleInputChange("dichVu", e.target.value)}
              />
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
      <div className="btn-choose">
        <div className="btn">
          <Link to="/device">
            <button>Hủy bỏ</button>
          </Link>
          <button onClick={handleAdd} className="btn-login">
            Thêm thiết bị
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDataDevice;
