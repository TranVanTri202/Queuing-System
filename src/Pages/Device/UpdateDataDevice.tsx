import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/addData.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchDataDevice, updateDevice } from "../../redux/Slice/deviceSlice";
import Navtop from "../../components/Layout/Navtop";
import { addDataDiary } from "../../redux/Slice/DiarySlice";
import { DeviceType } from "../../share/deviceInterface";
import { DiaryType } from "../../share/diaryInterface";
const UpdateDataDevice = () => {
  //lấy dữ liệu người dùng khi đã đăng nhập
  const accountStorage = localStorage.getItem("account");
  if (accountStorage) {
    var account = JSON.parse(accountStorage);
  }

  const time = new Date();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); //lấy id trên thanh url để xử lí
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

  //đưa vào nhật kí người dùng khi xử lí hành động nào đó
  const diary: DiaryType = {
    userName: account.username,
    time: time.toLocaleString(),
    ipAddress: "192.168.10",
    action: `Cập nhật thông tin thiết bị ${dataInfo.maThietBi}`,
  };

  useEffect(() => {
    dispatch(fetchDataDevice());
    const update = data.find((item) => item.id === id);
    setDataInfo(update!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const handleUpdate = async () => {
    await dispatch(updateDevice(dataInfo));
    await dispatch(addDataDiary(diary));
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
