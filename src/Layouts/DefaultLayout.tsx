import Menu from "../components/Layout/Menu";

interface childen {
  children: any;
}
const DefaultLayouts: React.FC<childen> = ({ children }) => {
  return (
    <div className="app">
      <div className="menu">
        <Menu />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayouts;
