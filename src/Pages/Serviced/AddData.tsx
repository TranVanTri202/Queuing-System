import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/addData.css";
import { useState } from "react";
import { ServiceType, addService } from "../../redux/Slice/ServiceSlice";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import Navtop from "../../components/Route/Navtop";
import { DiaryType, addDataDiary } from "../../redux/Slice/DiarySlice";
const AddDataService = () => {
  const accountStorage = localStorage.getItem("account");
  var account = accountStorage ? JSON.parse(accountStorage) : "Chưa đăng nhập";
  const time = new Date();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [dataInfo, setDataInfo] = useState<ServiceType>({
    maDichvu: "",
    tenDichvu: "",
    trangThai: "Hoạt động",
    moTa: "",
  });
  const diary: DiaryType = {
    userName: account.username,
    time: time.toLocaleString(),
    ipAddress: "192.168.10",
    action: `Thêm mới dịch vụ ${dataInfo.maDichvu}`,
  };
  const handleAdd = async () => {
    await dispatch(addService(dataInfo));
    dispatch(addDataDiary(diary));
    navigate("/service");
  };

  const handleInputChange = (field: string, value: string) => {
    setDataInfo({ ...dataInfo, [field]: value });
  };

  return (
    <div className="main">
      <Navtop
        labelFirst="Dịch vụ"
        lableSecond="Danh sách dịch vụ"
        labelThird="Thêm dịch vụ"
      />
      <h2 className="heading-text">Quản lí dịch vụ</h2>
      <div className="search-table-add-detail">
        <div className="addData">
          <h2>Thông tin dịch vụ</h2>
          <div className="input-info-add">
            <div className="input-row1-add">
              <div className="name-input-add">
                <label htmlFor="">Mã dịch vụ:</label>{" "}
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("maDichvu", e.target.value)
                  }
                />
                <label htmlFor="">Tên dịch vụ:</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("tenDichvu", e.target.value)
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mô tả:</label>
                <span className="dausao">*</span> <br />
                <textarea
                  name=""
                  id=""
                  cols={70}
                  rows={7}
                  onChange={(e) => handleInputChange("moTa", e.target.value)}
                />
              </div>
            </div>
            <h2 className="heading-text">Quy tắc cấp số</h2>
            <div className="quitat">
              <div className="input-choose">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" />{" "}
                  <label htmlFor="">Tự động tăng từ:</label>
                  <button style={{ marginLeft: "20px" }}>0001</button>
                  <label htmlFor="" style={{ marginLeft: "20px" }}>
                    đến
                  </label>
                  <button style={{ marginLeft: "20px" }}>9999</button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" /> <label htmlFor="">Prefix:</label>
                  <button style={{ marginLeft: "92px" }}>0001</button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" /> <label htmlFor="">Surfix:</label>
                  <button style={{ marginLeft: "92px" }}>0001</button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" />{" "}
                  <label htmlFor="">Reset mỗi ngày:</label>
                </div>
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
      <div className="btn-choose">
        <div className="btn">
          <Link to="/service">
            {" "}
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

export default AddDataService;
