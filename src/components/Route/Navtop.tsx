import iconNotification from "../../assets/imgs/img-icon/iconNotification.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
interface navtopProps {
  labelFirst: string;
  lableSecond: string;
  labelThird?: string;
}
const Navtop: React.FC<navtopProps> = ({
  labelFirst,
  lableSecond,
  labelThird,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const storedAccount = localStorage.getItem("account");
  if (storedAccount) {
    var account = JSON.parse(storedAccount);
  }
  const img = require(`../../${account.image}`);
  const [notify, setNotify] = useState<boolean>(false);

  const handleNotify = () => {
    setNotify(!notify);
  };
  let index = 0;
  useEffect(() => {
    console.log("re-render");
  }, [dispatch, data]);
  return (
    <div className="navtop">
      <div className="heading-navtop">
        <span>{labelFirst}</span>
        <i className="bi bi-chevron-right"></i>
        <span>{lableSecond}</span>
        {labelThird !== undefined && (
          <>
            <i className="bi bi-chevron-right"></i>
            <span>{labelThird}</span>
          </>
        )}
      </div>
      <div className="notification-avatar">
        <div className="">
          <img
            onClick={handleNotify}
            src={iconNotification}
            className="notifi"
            alt=""
          />
        </div>

        <Link to="/infomation" className="link-style">
          <div className="infomation">
            <div className="avatar">
              <img
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
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
  );
};

export default Navtop;
