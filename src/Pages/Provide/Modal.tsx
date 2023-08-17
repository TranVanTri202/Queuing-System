import { Modal } from "antd";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  dichVu: string;
}
const ModalAdd: React.FC<ModalProps> = ({ open, onClose, dichVu }) => {
  const data = useSelector((state: RootState) => state.Provide.dataProvide);
  const sttValues = data.map((item) => Number(item.stt));
  const maxStt = Math.max(...sttValues) + 1;

  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const hours = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");
  let timeBatDau = `${hours}:${minute}  ${day}/${month}/${year}`;
  let timeHetHan = ` ${hours}:${minute}  ${day + 1}/${month}/${year}`;

  return (
    <>
      <Modal
        centered
        open={open}
        onCancel={onClose}
        footer={false}
        style={{ padding: "0 !important" }}
      >
        <div className="modal-top">
          <h2>Số thứ tự được cấp</h2>
          <h1>{maxStt}</h1>
          <span>DV: {dichVu}</span>
        </div>

        <div className="modal-bottom">
          <h3>Thời gian cấp: {timeBatDau}</h3>
          <h3>Hạn sử dụng: {timeHetHan} </h3>
        </div>
      </Modal>
    </>
  );
};

export default ModalAdd;
