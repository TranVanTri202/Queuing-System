import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/addData.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import {
  DeviceType,
  fetchDataDevice,
  updateDevice,
} from "../../redux/Slice/DeviceSlice";
import Navtop from "../../components/Route/Navtop";
const UpdateDataDevice = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Device.dataDevice);

  const [dataInfo, setDataInfo] = useState<DeviceType>({
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
  useEffect(() => {
    dispatch(fetchDataDevice());
    const update = data.find((item) => item.id === id);
    setDataInfo(update!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);
  const handleUpdate = () => {
    dispatch(updateDevice(dataInfo));
    navigate("/device");
  };

  return (
    <div className="main">
      <Navtop
        labelFirst="Thiết bị"
        lableSecond="Danh sách thiết bị"
        labelThird="Cập nhật thiết bị"
      />
      <h2 className="heading-text">Quản lí thiết bị</h2>
      <div className="search-table-add-detail">
        <div className="addData">
          <h2>Thông tin thiết bị</h2>
          <div className="input-info-add">
            <div className="input-row1-add">
              <div className="name-input-add">
                <label htmlFor="">Mã thiết bị:</label>{" "}
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.maThietBi}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      maThietBi: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="name-input-add">
                <label htmlFor="">Loại Thiết bị:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.loaiThietBi}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      loaiThietBi: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="input-row2-add">
              <div className="name-input-add">
                <label htmlFor="">Tên thiết bị:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.tenThietBi}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      tenThietBi: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Tên đăng nhập:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.tenDangNhap}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      tenDangNhap: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="input-row3-add">
              <div className="name-input-add">
                <label htmlFor="">Địa chỉ IP:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.diaChiIP}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      diaChiIP: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mật khẩu:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.matKhau}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      matKhau: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="input-row4-add">
              <label htmlFor="">Dịch vụ sử dụng</label>
              <input
                type="text"
                value={dataInfo?.dichVu}
                onChange={(e) =>
                  setDataInfo((prev) => ({
                    ...prev,
                    dichVu: e.target.value,
                  }))
                }
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
            {" "}
            <button>Hủy bỏ</button>
          </Link>
          <button className="btn-login" onClick={handleUpdate}>
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDataDevice;
