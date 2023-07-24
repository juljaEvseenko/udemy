import { useState, useEffect, useRef } from "react";
import { DropdownItems } from "./DropdownItems";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { Panel } from "../Panel";

export const Dropdown = ({ data, onChange, value }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handlerClick = (data) => {
    // setValue(data);
    setOpen(false);
    console.log(data);
    onChange(data);
  };

  const itemsJSX = data.map((option) => {
    return (
      <DropdownItems
        key={option.id}
        value={option.value}
        content={option.label}
        onClick={() => handlerClick(option)}
      />
    );
  });

  const handleOpenDropdown = () => {
    setOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div className="w-48 relative " ref={ref}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleOpenDropdown}
      >
        {value?.label || "Select ..."}
        {!isOpen ? <GoChevronDown /> : <GoChevronUp />}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{itemsJSX}</Panel>}
    </div>
  );
};
