import { Modal } from "antd";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  dichVu: string;
  timeBegin: string;
  timeHetHan: string;
  stt: number;
}
const ModalAdd: React.FC<ModalProps> = ({
  open,
  onClose,
  dichVu,
  stt,
  timeBegin,
  timeHetHan,
}) => {
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
          <h1>{stt - 1}</h1>
          <span>DV: {dichVu}</span>
        </div>

        <div className="modal-bottom">
          <h3>Thời gian cấp: {timeBegin}</h3>
          <h3>Hạn sử dụng: {timeHetHan} </h3>
        </div>
      </Modal>
    </>
  );
};

export default ModalAdd;
