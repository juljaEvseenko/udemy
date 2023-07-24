export const DropdownItems = ({ content, value, onClick }) => {
  return (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      value={value}
      onClick={onClick}
    >
      {content}
    </div>
  );
};
