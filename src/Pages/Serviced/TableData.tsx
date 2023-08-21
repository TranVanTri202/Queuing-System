import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { ServiceType, fetchDataService } from "../../redux/Slice/ServiceSlice";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

interface tableProps {
  status: string;
}
const TableData: React.FC<tableProps> = ({ status }) => {
  const dispatch: AppDispatch = useDispatch();
  const dataService = useSelector(
    (state: RootState) => state.Service.dataService
  );

  let filter = dataService.filter(
    (item) => status === "Tất cả" || item.trangThai === status
  );
  useEffect(() => {
    dispatch(fetchDataService());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleUpdate = (id: string) => {
    navigate(`/updateDataService/${id}`);
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
      render: () => <span className="underline">Chi tiết</span>,
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
