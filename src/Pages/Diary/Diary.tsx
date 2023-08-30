import { DatePicker } from "antd";
import Navtop from "../../components/Layout/Navtop";
import TableData from "./TableData";
import { useState } from "react";
const Diary = () => {
  const [text, setText] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="main">
      <Navtop labelFirst="Cài đặt hệ thống" lableSecond="Nhật ký hoạt động" />
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
                    format="DD/MM/YYYY"
                    onChange={(date) =>
                      setStartDate(date ? date.toDate() : null)
                    }
                  />
                  <DatePicker
                    style={{ height: "35px" }}
                    onChange={(date) => setEndDate(date ? date.toDate() : null)}
                    format="DD/MM/YYYY"
                  />
                </div>
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
            <TableData startDate={startDate!} endDate={endDate!} text={text} />
            {/* table */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Diary;
