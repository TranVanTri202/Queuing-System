import "../../assets/styles/home.css";
import iconNotification from "../../assets/imgs/img-icon/iconNotification.png";
import { Link } from "react-router-dom";
import box1 from "../../assets/imgs/img-icon/box1.png";
import box2 from "../../assets/imgs/img-icon/box2.png";
import box3 from "../../assets/imgs/img-icon/box3.png";
import box4 from "../../assets/imgs/img-icon/box4.png";
import radius1 from "../../assets/imgs/img-icon/radius1.png";
import radius2 from "../../assets/imgs/img-icon/radius2.png";
import radius3 from "../../assets/imgs/img-icon/radius3.png";
import LineChartComponent from "../../components/Chart/Linechart";
import BoxHome from "../../components/BoxHome";
import Calendars from "../../components/Calendar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
const Home = () => {
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const [notify, setNotify] = useState<boolean>(false);
  const handleNotify = () => {
    setNotify(!notify);
  };
  const accountStored = localStorage.getItem("account");
  if (accountStored) {
    var account = JSON.parse(accountStored);
  }
  const img = require(`../../${account.image}`);

  return (
    <>
      <div className="home">
        <div className="homeleft">
          <div className="heading-navtop">
            <span>Dashboar</span>
          </div>
          <h2>Biểu đồ cấp số</h2>
          <div className="box-total">
            <BoxHome
              img={box1}
              total={"4.221"}
              labeltext={"Đã cấp"}
              phantram={"32.41%"}
            />
            <BoxHome
              img={box2}
              total={"3.721"}
              labeltext={"Đã sử dụng"}
              phantram={"32.41%"}
            />
            <BoxHome
              img={box3}
              total={"486"}
              labeltext={"đang chờ"}
              phantram={"56.41%"}
            />
            <BoxHome
              img={box4}
              total={"32"}
              labeltext={"đã bỏ qua"}
              phantram={"22.41%"}
            />
          </div>
          <div className="box-chart">
            <div className="chart-top">
              <div>
                <span className="label-thongke">Bảng thống kê theo ngày</span>{" "}
                <br />
                <i>Tháng 11/2023</i>
              </div>
              <div>
                <div className="choose">
                  <span>Xem theo</span>
                  <select name="" id="">
                    <option value="">Ngày</option>
                    <option value="">Tháng</option>
                    <option value="">Năm</option>
                  </select>
                </div>
              </div>
            </div>
            <LineChartComponent />
          </div>
        </div>
        <div className="homeright">
          <div className="notification-avatar">
            <img
              onClick={handleNotify}
              src={iconNotification}
              className="notifi"
              alt=""
            />
            <Link to="/infomation" className="link-style">
              <div className="infomation">
                <div className="avatar">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50px",
                    }}
                    src={img}
                    alt=""
                  />
                </div>
                <div className="info">
                  <span>Xin chào</span>
                  <h3>{account.name}</h3>
                </div>
              </div>
            </Link>
          </div>
          <h2>Tổng quan</h2>
          <div className="box-right">
            <img src={radius1} alt="" />
            <div>
              <h3 className="h3-box">4.221</h3>
              <span className="box1">
                <i className="bi bi-tv"></i>Thiết bị
              </span>
            </div>
            <div>
              <span className="label-text">Đang hoạt động</span>
              <h3 style={{ display: "inline" }} className="box1">
                3.762
              </h3>
              <br />
              <span className="label-text">Ngưng hoạt động</span>{" "}
              <h3 style={{ display: "inline" }} className="box1">
                3.762
              </h3>
            </div>
          </div>
          <div className="box-right">
            <img src={radius2} alt="" />
            <div>
              <h3 className="h3-box">4.221</h3>
              <span style={{ color: "#4277FF" }} className="box1">
                <i className="bi bi-tv"></i>Dịch vụ
              </span>
            </div>
            <div>
              <span className="label-text">Đang hoạt động</span>
              <h3
                style={{ display: "inline", color: "#4277FF" }}
                className="box1"
              >
                3.762
              </h3>
              <br />
              <span className="label-text">Ngưng hoạt động</span>{" "}
              <h3
                style={{ display: "inline", color: "#4277FF" }}
                className="box1"
              >
                3.762
              </h3>
            </div>
          </div>
          <div className="box-right">
            <img src={radius3} alt="" />
            <div>
              <h3 className="h3-box">4.221</h3>
              <span className="box1">
                <i className="bi bi-tv"></i>Cấp số
              </span>
            </div>
            <div>
              <span className="label-text">Đang hoạt động</span>
              <h3
                style={{ display: "inline", color: "#35C75A" }}
                className="box1"
              >
                3.762
              </h3>
              <br />
              <span className="label-text">Ngưng hoạt động</span>{" "}
              <h3
                style={{ display: "inline", color: "#35C75A" }}
                className="box1"
              >
                3.762
              </h3>
            </div>
          </div>
          <div className="CalendarHome">
            <Calendars />
          </div>
        </div>
        <div
          className="notify-message"
          style={notify ? { height: "400px" } : { height: "0", border: "none" }}
        >
          <div className="top-notify">
            <h3>Thông báo</h3>
          </div>
          <div className="bottom-notify">
            {data.map((item, index) => {
              return (
                <div key={index} className="text-notify">
                  <b>Người dùng: {item.tenKhachHang}</b> <br />
                  <span>Thời gian nhận số: {item.thoiGianBatDau} </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
