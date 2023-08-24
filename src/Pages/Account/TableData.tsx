import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Table } from "antd";
import { useEffect } from "react";
import { fetchDataAcount } from "../../redux/Slice/AccountSlice";
import { useNavigate } from "react-router-dom";
import { AccountType } from "../../share/accountInterface";

interface tableProps {
  status: string;
  text: string;
}

const TableData: React.FC<tableProps> = ({ status, text }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Account.dataAccount);

  //lọc dữ liệu
  const filter = data.filter(
    (item) =>
      (status === "Tất cả" || item.trangThai === status) &&
      (text === "" || item.email?.includes(text))
  );

  useEffect(() => {
    dispatch(fetchDataAcount());
    console.log("re-render");
  }, [dispatch]);

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
        dataSource={filter}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default TableData;
