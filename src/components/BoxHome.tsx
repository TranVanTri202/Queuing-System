interface BoxProps {
  img: any;
  total: string;
  phantram: string;
  labeltext: string;
}
const BoxHome: React.FC<BoxProps> = ({ img, total, phantram, labeltext }) => {
  return (
    <div className="total1">
      <div className="box-top">
        <img src={img} alt="" />
        <label htmlFor="">
          Số thứ tự <br />
          {labeltext}
        </label>
      </div>
      <div className="box-bottom">
        <h3>{total}</h3>
        <button>{phantram}</button>
      </div>
    </div>
  );
};

export default BoxHome;
