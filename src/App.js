import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import routes from "./router";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="main-content mt-5">
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children &&
                    route.children.map((child, index) => {
                      return (
                        <Route
                          key={index}
                          path={child.path}
                          element={child.element}
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
