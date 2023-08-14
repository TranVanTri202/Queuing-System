import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePages } from "./Layouts/Route";
import DefaultLayouts from "./Layouts/DefaultLayout";
import PageNotFound from "./Pages/404/Page404";
import DefaultLatoutLogin from "./Layouts/DefaultLayoutLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        {RoutePages.map((item, index) => {
          const LayoutComponent =
            item.route === "login" ? DefaultLatoutLogin : DefaultLayouts;

          return (
            <Route
              key={item.path}
              path={item.path}
              element={<LayoutComponent>{<item.component />}</LayoutComponent>}
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
