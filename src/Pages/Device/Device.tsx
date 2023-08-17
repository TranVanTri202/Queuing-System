import { Link } from "react-router-dom";
import TableData from "./TableData";
import btnAdd from "../../assets/imgs/btnAdd.png";
import { ChangeEvent, useState } from "react";
import Navtop from "../../components/Route/Navtop";
const Device = () => {
  const [statusActive, setStatusActive] = useState<string>("Tất cả");
  const [statusCornect, setStatusCornect] = useState<string>("Tất cả");
  const handleChangeStatusActive = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatusActive(e.target.value);
  };
  const handleChangeStatusCornect = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatusCornect(e.target.value);
  };
  return (
    <div className="main">
      <Navtop labelFirst="Thiết bị" lableSecond="Danh sách thiết bị" />
      <h2 className="heading-text">Danh sách thiết bị</h2>
      <div className="search-table-add">
        <div className="table-left">
          <div className="search">
            <div className="search-left">
              <div className="item-1">
                <label htmlFor="">Trạng thái hoạt động</label> <br />
                <select
                  name=""
                  id=""
                  value={statusActive}
                  onChange={handleChangeStatusActive}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Hoạt động">Hoạt động</option>
                  <option value="Ngưng hoạt động">Ngưng hoạt động</option>
                </select>
              </div>
              <div className="item-2">
                <label htmlFor="">Trạng thái kết nối</label> <br />
                <select
                  name=""
                  id=""
                  value={statusCornect}
                  onChange={handleChangeStatusCornect}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Kết nối">Kết nối</option>
                  <option value="Mất kết nối">Mất kết nối</option>
                </select>
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
            <TableData
              statusActive={statusActive}
              statusCornect={statusCornect}
            />
          </div>
        </div>
        <div>
          <Link to="/addDataDevice">
            <img className="add-btn" src={btnAdd} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Device;
