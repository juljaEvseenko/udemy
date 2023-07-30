import { useState } from "react";

export const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null); // 'asc' 'desc' null
  const [sortBy, setSortBy] = useState(null); // 'asc' 'desc' null

  const handleClick = (label) => {
    if (label !== sortBy && label) {
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

  let sortedData = data;
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

  console.log(data, sortedData)

  return {
    sortBy,
    sortOrder,
    sortedData,
    handleClick,
  };
};
