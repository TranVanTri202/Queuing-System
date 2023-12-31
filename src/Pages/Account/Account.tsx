import { Link } from "react-router-dom";
import Navtop from "../../components/Layout/Navtop";
import btnAdd from "../../assets/imgs/img-icon/iconAddAcount.png";
import TableData from "./TableData";
import { useState } from "react";
const Account = () => {
  const [text, setText] = useState<string>("");
  const [status, setStatus] = useState<string>("Tất cả");
  return (
    <div className="main">
      <Navtop labelFirst="Cài đặt hệ thống" lableSecond="Quản lý tài khoản" />
      <h2 className="heading-text">Danh sách tài khoản</h2>
      <div className="search-table-add">
        <div className="table-left">
          <div className="search">
            <div className="search-left">
              <div className="item-1">
                <label htmlFor="">Trạng thái hoạt động</label> <br />
                <select
                  name=""
                  id=""
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option defaultValue="Tất cả">Tất cả</option>
                  <option value="Hoạt động">Hoạt động</option>
                  <option value="Ngưng hoạt động">Ngưng hoạt động</option>
                </select>
              </div>
            </div>
            <div className="search-right">
              <label htmlFor="">Từ khóa</label>
              <br />
              <div className="input-search">
                <input
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="Nhập từ khóa"
                />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="table-data">
            {/* table */}
            <TableData status={status} text={text} />
            {/* table */}
          </div>
        </div>
        <div>
          <Link to="/addDataAccount">
            <img className="add-btn" src={btnAdd} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
