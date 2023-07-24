import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export const AccordionItem = ({ title, content, isOpen, handleEvent }) => {
  return (
    <>
      <div>
        <h3
          onClick={handleEvent}
          className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer"
        >
          {title} {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </h3>
        {isOpen && <p className="border-x border-t p-3">{content}</p>}
      </div>
    </>
  );
};
