import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import {
  fetDataProvideNumber,
  ProvideNumberType,
} from "../../redux/Slice/ProvideNumberSlice";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const TableData = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const navigate = useNavigate();
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
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 7 }} />
    </div>
  );
};

export default TableData;
