import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { pageMap } from "./common/constants";
import { Sidebar, Navbar } from "./components";
import {
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
  Calendar,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
} from "./pages";

function App() {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent
              content="Settings"
              position="BottomCenter"
              target="#setting-btn"
            >
              <button
                type="button"
                id="setting-btn"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <Navbar />
          </div>
        </div>

        <div>
          <Routes>
            {/* Dashboard */}
            <Route path={pageMap.top} element={<Ecommerce />}></Route>
            <Route path={pageMap.ecommerce} element={<Ecommerce />}></Route>

            {/* Pages */}
            <Route path={pageMap.orders} element={<Orders />}></Route>
            <Route path={pageMap.employees} element={<Employees />}></Route>
            <Route path={pageMap.customers} element={<Customers />}></Route>

            {/* Apps */}
            <Route path={pageMap.kanban} element={<Kanban />}></Route>
            <Route path={pageMap.editor} element={<Editor />}></Route>
            <Route path={pageMap.calendar} element={<Calendar />}></Route>
            <Route path={pageMap.colorPicker} element={<ColorPicker />}></Route>

            {/* Charts */}
            <Route path={pageMap.line} element={<Line />}></Route>
            <Route path={pageMap.area} element={<Area />}></Route>
            <Route path={pageMap.bar} element={<Bar />}></Route>
            <Route path={pageMap.pie} element={<Pie />}></Route>
            <Route path={pageMap.financial} element={<Financial />}></Route>
            <Route
              path={pageMap.colorMapping}
              element={<ColorMapping />}
            ></Route>
            <Route path={pageMap.stacked} element={<Stacked />}></Route>
            <Route path={pageMap.pyramid} element={<Pyramid />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
