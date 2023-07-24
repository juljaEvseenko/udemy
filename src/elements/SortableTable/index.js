import { useState } from "react";
import { Table } from "../Table";
import { getIcon } from "./getIcon";

export const SortableTable = (props) => {
  const { config, data } = props;
  let sortedData = data;

  const [sortOrder, setSortOrder] = useState(null); // 'asc' 'desc' null
  const [sortBy, setSortBy] = useState(null); // 'asc' 'desc' null

  const handleClick = (label) => {

    if(label !== sortBy && label ) {
        setSortOrder("asc");
        setSortBy(label);
        return;

    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    }

    if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    }

    if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((item) => item.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);

      const reversed = sortOrder === "asc" ? 1 : -1;

      if (typeof valA === "string") {
        return valA.localeCompare(valB) * reversed;
      }

      return (valA - valB) * reversed;
    });
  }

  const updatedConfig = config.map((configItem) => {
    if (configItem.sortValue) {
      return {
        ...configItem,
        header: () => (
          <th className ='cursor-pointer ' onClick={() => handleClick(configItem.label)}>

            {getIcon(configItem.label, sortBy, sortOrder)}
            {configItem.label}
          </th>
        ),
      };
    }

    return configItem;
  });
  return (
    <>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </>
  );
};
