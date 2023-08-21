import { Link, useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/addData.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Navtop from "../../components/Route/Navtop";
import { AccountType, addAccount } from "../../redux/Slice/AccountSlice";
import { message } from "antd";
const UpdateAccount = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Account.dataAccount);
  const { id } = useParams();
  useEffect(() => {
    const update = data.find((account) => account.id === id);
    setDataInfo(update!);
    console.log("re-render");
  }, [dispatch, id]);
  const [dataInfo, setDataInfo] = useState<AccountType>({
    username: "",
    password: "",
    email: "",
    role: "",
    phoneNumber: "",
    name: "",
    img: "",
    trangThai: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [typePassword1, setTypePassword1] = useState<boolean>(false);
  const [typePassword2, setTypePassword2] = useState<boolean>(false);
  const [password1, setPassword1] = useState<string>("");

  const handleChangType1 = () => {
    setTypePassword1(!typePassword1);
  };
  const handleChangType2 = () => {
    setTypePassword2(!typePassword2);
  };
  const openModal = async () => {
    if (password1 !== dataInfo.password) {
      messageApi.open({
        type: "warning",
        content: "Mật khẩu chưa khớp",
      });
    } else {
      dispatch(addAccount(dataInfo));
      navigate("/Account");
    }
  };

  const handleChangeInput = (prev: string, value: string) => {
    setDataInfo({ ...dataInfo, [prev]: value });
  };
  return (
    <div className="main">
      {contextHolder}
      <Navtop
        labelFirst="Cài đặt hệ thống"
        lableSecond="Quản lý tài khoản"
        labelThird="Cập nhật tài khoản"
      />
      <h2 className="heading-text">Quản lí tài khoản</h2>
      <div className="search-table-add-detail">
        <div className="addData">
          <h2>Thông tin tài khoản</h2>
          <div className="input-info-add">
            <div className="input-row1-add">
              <div className="name-input-add">
                <label htmlFor="">Họ tên </label>{" "}
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.name}
                  onChange={(e) => handleChangeInput("name", e.target.value)}
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Tên đăng nhập</label>
                <span className="dausao">*</span>
                <input
                  type="text"
                  value={dataInfo?.username}
                  onChange={(e) =>
                    handleChangeInput("username", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="input-row2-add">
              <div className="name-input-add">
                <label htmlFor="">Số điện thoại</label>
                <span className="dausao">*</span>
                <input
                  value={dataInfo?.phoneNumber}
                  type="number"
                  onChange={(e) =>
                    handleChangeInput("phoneNumber", e.target.value)
                  }
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Mật khẩu</label>
                <span className="dausao">*</span>
                <input
                  value={dataInfo?.password}
                  onChange={(e) => setPassword1(e.target.value)}
                  type={typePassword1 ? "password" : "text"}
                />
                <i
                  onClick={handleChangType1}
                  className={
                    typePassword1
                      ? "icon-eye bi bi-eye-slash"
                      : "icon-eye bi bi-eye"
                  }
                ></i>
              </div>
            </div>
            <div className="input-row3-add">
              <div className="name-input-add">
                <label htmlFor="">Email</label>
                <span className="dausao">*</span>
                <input
                  value={dataInfo?.email}
                  type="email"
                  onChange={(e) => handleChangeInput("email", e.target.value)}
                />
              </div>
              <div className="username-input-add">
                <label htmlFor="">Nhập lại mật khẩu</label>
                <span className="dausao">*</span>
                <input
                  value={dataInfo?.password}
                  onChange={(e) =>
                    setDataInfo((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type={typePassword2 ? "password" : "text"}
                />
                <i
                  onClick={handleChangType2}
                  className={
                    typePassword2
                      ? "icon-eye bi bi-eye-slash"
                      : "icon-eye bi bi-eye"
                  }
                ></i>
              </div>
            </div>
            <div className="input-row3-add">
              <div className="name-input-add">
                <label htmlFor="">Vai trò</label>
                <span className="dausao">*</span>
                <select
                  name=""
                  id=""
                  value={dataInfo?.role}
                  onChange={(e) => handleChangeInput("role", e.target.value)}
                >
                  <option value="Kế toán">Kế toán</option>
                  <option value="Admin">Admin</option>
                  <option value="Quản lý">Quản lý</option>
                </select>
              </div>
              <div className="username-input-add">
                <label htmlFor="">Tình trạng</label>
                <span className="dausao">*</span>
                <select
                  name=""
                  id=""
                  value={dataInfo?.trangThai}
                  onChange={(e) =>
                    handleChangeInput("trangThai", e.target.value)
                  }
                >
                  <option value="">-Chọn tình trạng-</option>
                  <option value="Hoạt động">Hoạt động</option>
                  <option value="Ngưng họat động">Ngưng hoạt động</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <span className="lableth">
                <span className="dausao">*</span>Là trường hợp thông tin bắt
                buộc
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-choose">
        <div className="btn">
          <Link to="/Account">
            <button>Hủy bỏ</button>
          </Link>
          <button onClick={openModal} className="btn-login">
            Thêm{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
