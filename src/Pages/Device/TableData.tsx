import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import React, { useEffect, useState } from "react";
import "../../assets/styles/table.css";
import { DeviceType, fetchDataDevice } from "../../redux/Slice/DeviceSlice";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

interface tableProps {
  statusActive?: string;
  statusCornect?: string;
}
const TableData: React.FC<tableProps> = ({ statusActive, statusCornect }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const dataDevice = useSelector((state: RootState) => state.Device.dataDevice);

  const filter = dataDevice.filter(
    (item) =>
      (statusActive === "Tất cả" || item.tinhTrangHD === statusActive) &&
      (statusCornect === "Tất cả" || item.tinhTrangKN === statusCornect)
  );

  const handleClick = (id: string) => {
    navigate(`/device/detail/${id}`);
  };
  useEffect(() => {
    dispatch(fetchDataDevice());
  }, [dispatch]);

  const [expandedService, setExpandedService] = useState<{
    [key: string]: boolean;
  }>({});

  const columns = [
    { title: "Mã thiết bị", dataIndex: "maThietBi", key: "maThietBi" },
    { title: "Tên thiết bị", dataIndex: "tenThietBi", key: "tenThietBi" },
    { title: "Địa chỉ IP", dataIndex: "diaChiIP", key: "diaChiIP" },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "tinhTrangHD",
      key: "tinhTrangHD",
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "tinhTrangKN",
      key: "tinhTrangKN",
    },
    {
      width: 350,
      title: "Dịch vụ sử dụng",
      dataIndex: "dichVu",
      key: "dichVu",
      render: (text: string, record: DeviceType) => {
        const isExpanded = expandedService[record.id!];
        return (
          <div>
            {isExpanded ? text : text.slice(0, 30)}
            {text.length > 30 && (
              <span
                className="underline"
                onClick={() => {
                  setExpandedService((prevState) => ({
                    ...prevState,
                    [record.id!]: !isExpanded,
                  }));
                }}
              >
                {isExpanded ? "Thu gọn" : "Xem thêm"}
              </span>
            )}
          </div>
        );
      },
    },

    {
      title: "",
      key: "action",
      render: (text: string, record: DeviceType) => (
        <span onClick={() => handleClick(record.id!)} className="underline">
          Chi tiết
        </span>
      ),
    },
    {
      title: "",
      key: "update",
      render: (text: string, record: DeviceType) => (
        <span
          onClick={() => navigate(`/updateDataDevice/${record.id}`)}
          className="underline"
        >
          Cập nhật
        </span>
      ),
    },
  ];
  let index = 1;
  return (
    <div>
      <Table
        dataSource={filter}
        columns={columns}
        rowKey={(record) => record.id!}
        pagination={{ pageSize: 7 }}
        bordered
      />
    </div>
  );
};

export default TableData;
