import { SortableTable } from "../../elements/SortableTable";
import { Table } from "../../elements/Table";
import { fruits } from "./data";

export const TablePage = () => {
  const configTable = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score x2",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  return <SortableTable data={fruits} config={configTable} />;
};
