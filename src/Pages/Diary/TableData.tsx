import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetDataDiary } from "../../redux/Slice/DiarySlice";
import { Table } from "antd";

const TableData = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Diary.dataDiary);

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
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default TableData;
