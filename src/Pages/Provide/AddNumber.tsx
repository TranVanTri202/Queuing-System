import { Link, useNavigate } from "react-router-dom";
import btnUpdate from "../../assets/imgs/img-icon/iconBack.png";
import "../../assets/styles/detail.css";
import { ChangeEvent, useState } from "react";
import ModalAdd from "./Modal";
import Navtop from "../../components/Layout/Navtop";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { format, addDays } from "date-fns";
import { addProvideNumer } from "../../redux/Slice/ProvideNumberSlice";
import { message } from "antd";
import { addDataDiary } from "../../redux/Slice/DiarySlice";
import { ProvideNumberType } from "../../share/provideInterface";
import { DiaryType } from "../../share/diaryInterface";
const AddNumber = () => {
  //lấy dữ liệu người dùng khi đã đăng nhạp thành công
  const accountStore = localStorage.getItem("account");
  if (accountStore) {
    var account = JSON.parse(accountStore);
  }

  const navigate = useNavigate();
  const dispath: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const sttValues = data.map((item) => Number(item.stt));
  const maxStt = Math.max(...sttValues) + 1; //lấy số thứ tự tiếp theo làm stt khi cung cấp số mới

  const time = new Date();
  const timeBatDau = format(time, "HH:mm dd/MM/yyyy");
  const timeHetHan = format(addDays(time, 1), "HH:mm dd/MM/yyyy");
  const [messageApi, contextHolder] = message.useMessage(); //thanh thông báo
  const [dichVu, setDichvu] = useState<string>();
  const [modal, setModal] = useState<boolean>(false);

  const handleAdd = async () => {
    if (dichVu === undefined) {
      messageApi.open({
        type: "warning",
        content: "Bạn chưa chọn dịch vụ",
      });
    } else {
      const newDataInfo: ProvideNumberType = {
        stt: maxStt.toString(),
        tenKhachHang: account.name,
        tenDichVu: dichVu || "",
        thoiGianBatDau: timeBatDau,
        thoiGianHetHan: timeHetHan,
        trangThai: "Đang chờ",
        nguonCap: "Hệ thống",
      };
      //đưa vào nhật kí người dùng khi xử lí hành động nào đó
      const diary: DiaryType = {
        userName: account.username,
        time: time.toLocaleString(),
        ipAddress: "192.168.10",
        action: `Cung cấp số ${newDataInfo.stt} dịch vụ là ${newDataInfo.tenDichVu}`,
      };
      setModal(true);
      await dispath(addProvideNumer(newDataInfo));
      await dispath(addDataDiary(diary));
    }
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleChangeDichVu = (e: ChangeEvent<HTMLSelectElement>) => {
    setDichvu(e.target.value);
  };

  return (
    <div className="main">
      {contextHolder}
      <Navtop
        labelFirst="Cấp số"
        lableSecond="Danh sách cấp số"
        labelThird="Cấp số mới"
      />
      <h2 className="heading-text">Quản lí cấp số</h2>
      <div className="search-table-add-detail">
        <div className="detail">
          <h1>Cấp số mới</h1>
          <span className="dichvu-add">Dịch vụ khách hàng lựa chọn</span>
          <div className="item-select">
            <select name="" id="" onChange={handleChangeDichVu}>
              <option defaultValue={""}>--Chọn dịch vụ--</option>
              <option value="Khám tim mạch">Khám tim mạch</option>
              <option value="Khám sản phụ khoa">Khám sản phụ khoa</option>
              <option value="Khám răng hàm mặt">Khám răng hàm mặt</option>
              <option value="Khám tai mũi họng">Khám tai mũi họng</option>
            </select>
          </div>
          <div className="btn-choose" style={{ marginTop: "45px" }}>
            <div className="btn">
              <Link to="/provide">
                {" "}
                <button>Hủy bỏ</button>
              </Link>
              <button className="btn-login" onClick={handleAdd}>
                In số
              </button>
            </div>
          </div>
        </div>
        <div className="add-btn-detail">
          <img
            onClick={() => navigate(`/provide`)}
            className="icon-detail"
            src={btnUpdate}
            alt=""
          />
        </div>
      </div>
      <ModalAdd
        dichVu={dichVu!}
        open={modal}
        onClose={handleCloseModal}
        stt={maxStt}
        timeBegin={timeBatDau}
        timeHetHan={timeHetHan}
      />
    </div>
  );
};

export default AddNumber;
