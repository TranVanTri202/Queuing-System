import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetDataDiary } from "../../redux/Slice/DiarySlice";
import { Table } from "antd";
import { parse } from "date-fns";

interface tableProps {
  text: string;
  startDate: Date;
  endDate: Date;
}
const TableData: React.FC<tableProps> = ({ text, startDate, endDate }) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Diary.dataDiary);
  console.log(startDate);

  //loc du lieu
  const filter = data.filter(
    (item) =>
      (text === "" || item.userName.includes(text)) &&
      (!startDate ||
        startDate <= parse(item.time, "HH:mm:ss dd/MM/yyyy", new Date())) &&
      (!endDate ||
        endDate >= parse(item.time, "HH:mm:ss dd/MM/yyyy", new Date()))
  );

  useEffect(() => {
    dispatch(fetDataDiary());
  }, [dispatch]);

  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Thời gian tác động ",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Địa chỉ thực hiện",
      dataIndex: "ipAddress",
      key: "ipAddress",
    },
    {
      title: "Thao tác thực hiện",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div>
      <Table
        rowKey={(record) => record.id!}
        columns={columns}
        dataSource={filter}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default TableData;
