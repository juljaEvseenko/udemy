import { Layout } from "./elements/Layout";
import { AccordionPage } from "./pages/AccordionPage";
import { ButtonPage } from "./pages/ButtonPage";
import { CounterPage } from "./pages/CounterPage";
import { DropdownPage } from "./pages/DropdownPage";
import { ModalPage } from "./pages/ModalPage";
import { TablePage } from "./pages/TablePage";

import { Routes, Route, Outlet, Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ButtonPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </>
  );
};
