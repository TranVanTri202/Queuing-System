import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchDataService } from "../../redux/Slice/ServiceSlice";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { ServiceType } from "../../share/serviceInterface";

interface tableProps {
  status: string;
  text: string;
}
const TableData: React.FC<tableProps> = ({ status, text }) => {
  const dispatch: AppDispatch = useDispatch();
  const dataService = useSelector(
    (state: RootState) => state.Service.dataService
  );

  //lọc dữ liệu trong bảng
  let filter = dataService.filter(
    (item) =>
      (status === "Tất cả" || item.trangThai === status) &&
      (text === "" || item.maDichvu.includes(text))
  );

  useEffect(() => {
    dispatch(fetchDataService());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleUpdate = (id: string) => {
    navigate(`/updateDataService/${id}`);
  };

  const handleDetail = (id: string) => {
    navigate(`/detailService/${id}`);
  };

  const columns = [
    {
      title: "Mã dịch vụ",
      dataIndex: "maDichvu",
      key: "maDichvu",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "tenDichvu",
      key: "tenDichvu",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    { title: "Trạng thái", dataIndex: "trangThai", key: "trangThai" },
    {
      title: "",
      key: "details",
      render: (text: string, record: ServiceType) => (
        <span onClick={() => handleDetail(record.id!)} className="underline">
          Chi tiết
        </span>
      ),
    },
    {
      title: "",
      key: "updates",
      render: (text: string, record: ServiceType) => (
        <span onClick={() => handleUpdate(record.id!)} className="underline">
          Cập nhật
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table
        rowKey={(record) => record.id!}
        dataSource={filter}
        columns={columns}
        pagination={{ pageSize: 7 }}
        bordered
      />
    </div>
  );
};

export default TableData;
