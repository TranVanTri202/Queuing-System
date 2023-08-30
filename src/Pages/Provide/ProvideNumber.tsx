import { Link } from "react-router-dom";
import btnAdd from "../../assets/imgs/img-icon/btnaddCapso.png";
import TableData from "./TableData";
import Navtop from "../../components/Layout/Navtop";
import { DatePicker } from "antd";
import { useState } from "react";

const Provide = () => {
  const [nameService, setNameService] = useState<string>("Tất cả");
  const [status, setStatus] = useState<string>("Tất cả");
  const [nguonCap, setNguonCap] = useState<string>("Tất cả");
  const [stt, setStt] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="main">
      <Navtop labelFirst="Cấp số" lableSecond="Danh sách cấp số" />
      <h2 className="heading-text">Quản lí cấp số</h2>
      <div className="search-table-add">
        <div className="table-left">
          <div className="search">
            <div className="search-left">
              <div className="item-1">
                <label htmlFor="">Tên dịch vụ</label> <br />
                <select
                  onChange={(e) => setNameService(e.target.value)}
                  style={{ width: "140px" }}
                  name=""
                  id=""
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Khám tim mạch">Khám tim mạch</option>
                  <option value="Khám sản phụ khoa">Khám sản phụ khoa</option>
                  <option value="Khám răng hàm mặt">Khám răng hàm mặt</option>
                  <option value="Khám tai mũi họng">Khám tai mũi họng</option>
                </select>
              </div>
              <div className="item-2">
                <label htmlFor="">Tình trạng</label> <br />
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ width: "140px" }}
                  name=""
                  id=""
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Đang chờ">Đang chờ</option>
                  <option value="Đã sử dụng">Đã sử dụng</option>
                  <option value="Bỏ qua">Bỏ qua</option>
                </select>
              </div>
              <div className="item-2">
                <label htmlFor="">Nguồn cấp</label> <br />
                <select
                  onChange={(e) => setNguonCap(e.target.value)}
                  style={{ width: "140px" }}
                  name=""
                  id=""
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Kiosk">Kiosk</option>
                  <option value="Hệ thống">Hệ thống</option>
                </select>
              </div>
              <div className="item-2">
                <div className="item-2">
                  <label htmlFor="">Chọn thời gian</label> <br />
                  <div className="input-time">
                    <DatePicker
                      style={{
                        height: "35px",
                        marginTop: "10px",
                        marginRight: "5px",
                      }}
                      onChange={(date) =>
                        setStartDate(date ? date.toDate() : null)
                      }
                      format="DD/MM/YYYY"
                    />
                    <i className="bi bi-caret-right-fill"></i>
                    <DatePicker
                      style={{ height: "35px" }}
                      format="DD/MM/YYYY"
                      onChange={(date) =>
                        setEndDate(date ? date.toDate() : null)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="search-right">
              <label htmlFor="">Từ khóa</label>
              <br />
              <div className="input-search">
                <input
                  onChange={(e) => setStt(e.target.value)}
                  type="text"
                  placeholder="Nhập từ khóa"
                />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="table-data">
            <TableData
              status={status}
              nguonCap={nguonCap}
              nameService={nameService}
              stt={stt}
              startDate={startDate!}
              endDate={endDate!}
            />
          </div>
        </div>
        <div>
          <Link to="/provide/addNumber">
            <img className="add-btn" src={btnAdd} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Provide;
