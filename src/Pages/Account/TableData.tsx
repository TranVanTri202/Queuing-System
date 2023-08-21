import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Table } from "antd";
import { useEffect } from "react";
import { AccountType, fetchDataAcount } from "../../redux/Slice/AccountSlice";
import { useNavigate } from "react-router-dom";
const TableData = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Account.dataAccount);

  useEffect(() => {
    dispatch(fetchDataAcount());
  }, [dispatch]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "userName",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
    },
    {
      title: "",
      key: "update",
      render: (text: string, record: AccountType) => (
        <span
          onClick={() => navigate(`/UpdateAccount/${record.id}`)}
          className="underline"
        >
          Cập nhật
        </span>
      ),
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
