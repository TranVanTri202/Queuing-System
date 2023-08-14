import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchDataService } from "../../redux/Slice/ServiceSlice";
import { useNavigate } from "react-router-dom";

const TableData = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const dataService = useSelector(
    (state: RootState) => state.Service.dataDevice
  );

  useEffect(() => {
    dispatch(fetchDataService());
  }, [dispatch]);

  const handleDetail = (id: any) => {
    navigate(`/device/detail/${id}`);
    console.log(id);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mã dịch vụ</th>
            <th>Tên dịch vụ</th>
            <th>Mổ tả</th>
            <th>Trạng thái hoạt động</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataService.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.maDichvu}</td>
                <td>{item.tenDichvu}</td>
                <td>{item.moTa}</td>
                <td>{item.trangThai}</td>
                <td>
                  <span onClick={() => handleDetail(item.id)}>Chi tiết</span>
                </td>
                <td>Cập nhật</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
