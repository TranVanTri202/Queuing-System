import "../../assets/styles/detail.css";
import btnUpdate from "../../assets/imgs/img-icon/iconUpdate.png";
import btnBack from "../../assets/imgs/img-icon/iconBack.png";
import Navtop from "../../components/Layout/Navtop";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchDataService } from "../../redux/Slice/ServiceSlice";
import { DatePicker, Table } from "antd";
import { ServiceType } from "../../share/serviceInterface";
const DetailService = () => {
  const navigate = useNavigate();
  const { id } = useParams(); //lấy id trên url để xử lí
  const dispatch: AppDispatch = useDispatch();
  const [service, setService] = useState<ServiceType>();
  const [status, setStatus] = useState<string>("Tất cả");
  const [stt, setStt] = useState<string>("");
  const dataService = useSelector(
    (state: RootState) => state.Service.dataService
  );

  const dataProvide = useSelector(
    (state: RootState) => state.Provide.dataProvide
  );

  //loc du lieu
  const filter = dataProvide.filter(
    (item) =>
      (status === "Tất cả" || item.trangThai === status) &&
      (stt === "" || item.stt.includes(stt))
  );

  useEffect(() => {
    dispatch(fetchDataService);
    const detail = dataService.find((service) => service.id === id);
    setService(detail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
    },
  ];
  return (
    <div className="main">
      <Navtop
        labelFirst="Dịch vụ"
        lableSecond="Danh sách dịch vụ"
        labelThird="Chi tiết"
      />
      <h2 className="heading-text">Quản lí dịch vụ</h2>
      <div className="search-table-add-detail">
        <div className="detail detail-service" style={{ width: "350px" }}>
          <h3 className="heading-text">Thông tin dịch vụ</h3>
          <div className="text">
            <b>Mã dịch vụ</b> <label htmlFor="">{service?.maDichvu}</label>
          </div>
          <div className="text">
            <b>Tên dịch vụ</b> <label htmlFor="">{service?.tenDichvu}</label>
          </div>
          <div className="text">
            <b>Mô tả</b> <label htmlFor="">{service?.moTa}</label>
          </div>
          <h3 className="heading-text">Quy tắc cấp số</h3>

          <div style={{ display: "flex", alignItems: "center" }}>
            <b>Tăng từ </b>
            <button className="btn-quitat" style={{ marginLeft: "20px" }}>
              0001
            </button>
            <label htmlFor="" style={{ marginLeft: "20px" }}>
              đến
            </label>
            <button className="btn-quitat" style={{ marginLeft: "20px" }}>
              9999
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <b>Prefix:</b>
            <button className="btn-quitat" style={{ marginLeft: "92px" }}>
              0001
            </button>
          </div>
          <div>
            <b>Reset mỗi ngày</b>
          </div>
        </div>

        <div className="main-right-service">
          <div className="search">
            <div className="search-left">
              <div className="item-2">
                <label htmlFor="">Tình trạng</label> <br />
                <select
                  style={{ width: "140px" }}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Đang chờ">Đang chờ</option>
                  <option value="Đã sử dụng">Đã sử dụng</option>
                  <option value="Bỏ qua">Bỏ qua</option>
                </select>
              </div>

              <div className="item-2">
                <div className="item-2">
                  <label htmlFor="">Chọn thời gian</label> <br />
                  <div className="input-time" style={{ display: "flex" }}>
                    <DatePicker
                      style={{
                        height: "35px",
                        marginTop: "10px",
                        marginRight: "5px",
                      }}
                      format="DD/MM/YYYY"
                    />
                    <i
                      className="bi bi-caret-right-fill"
                      style={{ marginTop: "20px" }}
                    ></i>
                    <DatePicker
                      style={{ height: "35px", marginTop: "10px" }}
                      format="DD/MM/YYYY"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="search-right">
              <label htmlFor="">Từ khóa</label>
              <br />
              <div className="input-search" style={{ width: "200px" }}>
                <input
                  style={{ width: "100px" }}
                  type="text"
                  placeholder="Nhập từ khóa"
                  onChange={(e) => setStt(e.target.value)}
                />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
          <Table
            rowKey={(revord) => revord.id!}
            columns={columns}
            dataSource={filter}
            pagination={{ pageSize: 6 }}
          />
        </div>
        <div className="add-btn-detail">
          <img
            style={{ display: "block" }}
            className="icon-detail"
            src={btnUpdate}
            alt=""
            onClick={() => navigate(`/updateDataService/${id}`)}
          />
          <Link to="/service">
            <img className="icon-detail" src={btnBack} alt="" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
