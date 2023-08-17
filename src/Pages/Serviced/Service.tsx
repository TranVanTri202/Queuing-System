import { Link } from "react-router-dom";
import TableData from "./TableData";
import btnAdd from "../../assets/imgs/iconAddDichvu.png";
import { DatePicker } from "antd";
import Navtop from "../../components/Route/Navtop";
const Device = () => {
  return (
    <div className="main">
      <Navtop labelFirst="Dịch vụ" lableSecond="Danh sách dịch vụ" />
      <h2 className="heading-text">Quản lí dịch vụ</h2>
      <div className="search-table-add">
        <div className="table-left">
          <div className="search">
            <div className="search-left">
              <div className="item-1">
                <label htmlFor="">Trạng thái hoạt động</label> <br />
                <select name="" id="">
                  <option value="">Tất cả</option>
                  <option value="">Hoạt động</option>
                  <option value="">Ngưng hoạt động</option>
                </select>
              </div>
              <div className="item-2">
                <label htmlFor="">Chọn thời gian</label> <br />
                <div className="input-time">
                  <DatePicker
                    style={{
                      height: "35px",
                      marginTop: "10px",
                      marginRight: "5px",
                    }}
                  />
                  <DatePicker style={{ height: "35px" }} />
                </div>
              </div>
            </div>
            <div className="search-right">
              <label htmlFor="">Từ khóa</label>
              <br />
              <div className="input-search">
                <input type="text" placeholder="Nhập từ khóa" />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="table-data">
            {/* table */}
            <TableData />
            {/* table */}
          </div>
        </div>
        <div>
          <Link to="/addDataService">
            <img className="add-btn" src={btnAdd} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Device;
