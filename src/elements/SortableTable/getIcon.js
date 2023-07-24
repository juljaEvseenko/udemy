import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export const getIcon = (label, sortBy, sortOrder) => {
  if (label !== sortBy || sortOrder === null) {
    return <FaSort />;
  }

  if (sortOrder === "asc") {
    return <FaSortUp />;
  }

  if (sortOrder === "desc") {
    return <FaSortDown />;
  }
};
