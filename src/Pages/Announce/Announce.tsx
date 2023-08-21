import btnDown from "../../assets/imgs/img-icon/iconDown.png";
import { DatePicker } from "antd";
import Navtop from "../../components/Route/Navtop";
import TableData from "../Announce/TableData";
const Device = () => {
  return (
    <div className="main">
      <Navtop labelFirst="Báo cáo" lableSecond="Lập báo cáo" />
      <div className="search-table-add">
        <div className="table-left">
          <div className="search">
            <div className="search-left">
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
          </div>
          <div className="table-data">
            {/* table */}
            <TableData />
            {/* table */}
          </div>
        </div>
        <div>
          <img className="add-btn" src={btnDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Device;
