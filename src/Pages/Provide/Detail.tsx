import { useNavigate, useParams } from "react-router-dom";
import btnUpdate from "../../assets/imgs/img-icon/iconBack.png";
import "../../assets/styles/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetDataProvideNumber } from "../../redux/Slice/ProvideNumberSlice";
import Navtop from "../../components/Route/Navtop";
import { ProvideNumberType } from "../../share/provideInterface";
const DetailProvide = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); //lấy id trên url để xử lí
  const ditpatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const [provide, setProvide] = useState<ProvideNumberType>();

  useEffect(() => {
    const detail = data.find((item) => item.id === id);
    setProvide(detail);
    ditpatch(fetDataProvideNumber());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ditpatch, id]);

  return (
    <div className="main">
      <Navtop
        labelFirst="Thiết bị"
        lableSecond="Danh sách cấp số"
        labelThird="chi tiết"
      />
      <h2 className="heading-text">Quản lí cấp số</h2>
      <div className="search-table-add-detail">
        <div className="detail">
          <h3>Thông tin thiết bị</h3>
          <div className="info-detail">
            <div className="info-left">
              <label htmlFor="">Họ tên</label>{" "}
              <span>{provide?.tenKhachHang}</span> <br />
              <label htmlFor="">Tên dịch vụ</label>{" "}
              <span>{provide?.tenDichVu}</span> <br />
              <label htmlFor="">Số thứ tự</label> <span>{provide?.stt}</span>
              <br />
              <label htmlFor="">Thời gian cấp</label>{" "}
              <span>{provide?.thoiGianBatDau}</span>
              <br />
              <label htmlFor="">Hạn sử dụng</label>{" "}
              <span>{provide?.thoiGianHetHan}</span>
              <br />
            </div>
            <div className="info-right">
              <label htmlFor="">Nguồn cấp</label>{" "}
              <span>{provide?.nguonCap}</span>
              <br />
              <label htmlFor="">Trạng thái</label>{" "}
              <span>{provide?.trangThai}</span>
              <br />
              <label htmlFor="">Số điện thoại</label> <span></span>
              <br />
              <label htmlFor="">Địa chỉ email</label> <span></span>
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
    </div>
  );
};

export default DetailProvide;
