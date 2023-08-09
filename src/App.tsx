import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteAdmin } from "./Layouts/Route";
import DefaultLayouts from "./Layouts/DefaultLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* {RouteLogin.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={<item.component />} />
          );
        })} */}
        {RouteAdmin.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <DefaultLayouts>
                  {" "}
                  <item.component />{" "}
                </DefaultLayouts>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
