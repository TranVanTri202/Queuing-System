import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { parse } from "date-fns";

import { fetDataProvideNumber } from "../../redux/Slice/ProvideNumberSlice";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { ProvideNumberType } from "../../share/provideInterface";
interface tableProps {
  nameService: string;
  status: string;
  nguonCap: string;
  stt: string;
  startDate: Date;
  endDate: Date;
}
const TableData: React.FC<tableProps> = ({
  nameService,
  status,
  nguonCap,
  stt,
  startDate,
  endDate,
}) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);

  //lọc dữ liệu trong bảng
  const filter = data.filter(
    (item) =>
      (nameService === "Tất cả" || item.tenDichVu === nameService) &&
      (status === "Tất cả" || item.trangThai === status) &&
      (nguonCap === "Tất cả" || item.nguonCap === nguonCap) &&
      (stt === "" || item.stt.includes(stt)) &&
      (!startDate ||
        parse(item.thoiGianBatDau, "HH:mm dd/MM/yyyy", new Date()) >=
          startDate) &&
      (!endDate ||
        parse(item.thoiGianBatDau, "HH:mm dd/MM/yyyy", new Date()) <= endDate)
  );

  useEffect(() => {
    dispatch(fetDataProvideNumber());
  }, [dispatch]);

  const handleDetail = (id: string) => {
    navigate(`/provide/detail/${id}`);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "tenKhachHang",
      key: "tenKhachHang",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "tenDichVu",
      key: "tenDichVu",
    },
    {
      title: "Thời gian cấp",
      dataIndex: "thoiGianBatDau",
      key: "thoiGianBatDau",
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "thoiGianHetHan",
      key: "thoiGianHetHan",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
    },
    {
      title: "Nguồn cấp",
      dataIndex: "nguonCap",
      key: "nguonCap",
    },
    {
      title: "",
      key: "detail",
      render: (text: string, record: ProvideNumberType) => (
        <span onClick={() => handleDetail(record.id!)} className="underline">
          {" "}
          Chi tiết
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
      />
    </div>
  );
};

export default TableData;
