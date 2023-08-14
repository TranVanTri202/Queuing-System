import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import "../../assets/styles/table.css";
import { fetchDataDevice } from "../../redux/Slice/DeviceSlice";
import { useNavigate } from "react-router-dom";

const TableData = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const dataDevice = useSelector((state: RootState) => state.Device.dataDevice);
  const hanleUpdate = () => {
    navigate("/updateData");
  };
  const handleClick = (id: string) => {
    navigate(`/device/detail/${id}`);
  };
  useEffect(() => {
    dispatch(fetchDataDevice());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th>Tình trạng hoạt động</th>
            <th>Tình trạng kết nối</th>
            <th>Dịch vụ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataDevice.map((item, index) => {
            return (
              <tr>
                <td>{item.maThietBi}</td>
                <td>{item.tenThietBi}</td>
                <td>{item.diaChiIP}</td>
                <td>{item.tinhTrangHD}</td>
                <td>{item.tinhTrangKN}</td>
                <td>{item.dichVu}</td>
                <td>
                  <span onClick={() => handleClick(item.id)}>chitiet</span>
                </td>
                <td onClick={hanleUpdate}>Cập nhật</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
