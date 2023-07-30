import { Table } from "../Table";
import { getIcon } from "./getIcon";
import { useSort } from "../../hooks/useSort";

export const SortableTable = (props) => {
  const { config, data } = props;

  const { sortBy, sortOrder, sortedData, handleClick } = useSort(data, config);

  const updatedConfig = config.map((configItem) => {
    if (configItem.sortValue) {
      return {
        ...configItem,
        header: () => (
          <th
            className="cursor-pointer "
            onClick={() => handleClick(configItem.label)}
          >
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
