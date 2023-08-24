import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetDataProvideNumber } from "../../redux/Slice/ProvideNumberSlice";
import { Table } from "antd";
import { parse } from "date-fns";

interface tableProps {
  startDate: Date;
  endDate: Date;
}

const TableData: React.FC<tableProps> = ({ startDate, endDate }) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);

  //lọc dữ liệu
  const filter = data.filter(
    (item) =>
      (!startDate ||
        startDate <=
          parse(item.thoiGianBatDau, "HH:mm dd/MM/yyyy", new Date())) &&
      (!endDate ||
        endDate >= parse(item.thoiGianBatDau, "HH:mm dd/MM/yyyy", new Date()))
  );

  useEffect(() => {
    dispatch(fetDataProvideNumber());
  }, [dispatch]);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
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
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
    },
    {
      title: "Nguồn cấp",
      dataIndex: "nguonCap",
      key: "nguonCap",
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
