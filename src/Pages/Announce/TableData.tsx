import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetDataProvideNumber } from "../../redux/Slice/ProvideNumberSlice";
import { Table } from "antd";
const TableData = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);

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
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default TableData;
