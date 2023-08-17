import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/addData.css";
import { useState, useEffect } from "react";
import {
  ServiceType,
  fetchDataService,
  updateService,
} from "../../redux/Slice/ServiceSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Navtop from "../../components/Route/Navtop";
const UpdateDataService = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Service.dataDevice);
  const { id } = useParams();
  const [service, setService] = useState<ServiceType>({
    maDichvu: "",
    tenDichvu: "",
    trangThai: "Hoạt động",
    moTa: "",
  });
  useEffect(() => {
    const update = data.find((item) => item.id === id);
    setService(update!);
    dispatch(fetchDataService());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const navigate = useNavigate();
  const handleUpdate = () => {
    dispatch(updateService(service));
    navigate("/service");
  };
  return (
    <div className="main">
      <Navtop
        labelFirst="Dịch vụ"
        lableSecond="Danh sách dịch vụ"
        labelThird="Cập nhật dịch vụ"
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
                  value={service?.maDichvu}
                  onChange={(e) =>
                    setService((prev) => ({
                      ...prev,
                      maDichvu: e.target.value,
                    }))
                  }
                />
                <label htmlFor="">Tên dịch vụ:</label>
                <span className="dausao">*</span>
                <input
                  value={service?.tenDichvu}
                  onChange={(e) =>
                    setService((prev) => ({
                      ...service,
                      tenDichvu: e.target.value,
                    }))
                  }
                  type="text"
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mô tả:</label>
                <span className="dausao">*</span> <br />
                <textarea
                  value={service?.moTa}
                  onChange={(e) =>
                    setService((prev) => ({ ...service, moTa: e.target.value }))
                  }
                  name=""
                  id=""
                  cols={70}
                  rows={7}
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
          <button className="btn-login" onClick={handleUpdate}>
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDataService;
