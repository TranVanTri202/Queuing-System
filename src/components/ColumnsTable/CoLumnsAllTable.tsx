const ColumnsTableDevice = () => {
  const columnsDevice = [
    {
      title: "Mã thiết bị",
      dataIndex: "mathietbi",
      key: "id",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "tenthiebi",
      key: "name",
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "diachi",
      key: "address",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "tinhtrangHD",
      key: "HD",
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "tinhtrangKN",
      key: "KN",
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "dichvu",
      key: "dichvu",
    },
    {
      title: "",
      dataIndex: "chitiet",
      key: "chitiet",
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: () => <a className="decoration">Chi tiết</a>,
    },
    {
      title: "",
      dataIndex: "capnhat",
      key: "capnhat",
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: () => <a className="decoration">Cập nhật</a>,
    },
  ];

  return columnsDevice;
};

export default ColumnsTableDevice;
