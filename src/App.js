import { AccordionPage } from "./pages/AccordionPage";
import { ButtonPage } from "./pages/ButtonPage";
import { CounterPage } from "./pages/CounterPage";
import { DropdownPage } from "./pages/DropdownPage";
import { ModalPage } from "./pages/ModalPage";
import { TablePage } from "./pages/TablePage";

export const App = () => {
  return <>
    <ButtonPage />
    <hr />
    <AccordionPage />
    <hr />
    <DropdownPage />
    <hr />
    <ModalPage/>
    <hr />
    <TablePage />
    <hr />
    <CounterPage />
  </>
}