import { Fragment } from "react";

export const Table = ({ data, config }) => {
  const rowsJSX = data.map((rowData) => {
    const renderedCells = config.map((configItem) => {
      return (
        <td className="p-3" key={configItem.label}>
          {configItem.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={rowData.name}>
        {renderedCells}
      </tr>
    );
  });

  const theadJSX = config.map((rowData) => {
    if (rowData.header) {
      return <Fragment key={rowData.label}>{rowData.header()}</Fragment>;
    }
    return <th key={rowData.label}>{rowData.label}</th>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{theadJSX}</tr>
      </thead>
      <tbody>{rowsJSX}</tbody>
    </table>
  );
};
