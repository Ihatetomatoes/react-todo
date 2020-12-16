import classNames from "classnames";

const Pill = ({ priority = "medium" }) => {
  const pillClass = classNames({
    "text-xs p-1 px-2 rounded-md": true,
    "bg-red-200 text-red-800": priority === "high",
    "bg-yellow-200 text-yellow-800": priority === "medium",
    "bg-gray-200 text-gray-800": priority === "low",
  });
  return (
    <span className={pillClass} data-testid="pill">
      {priority}
    </span>
  );
};

export default Pill;
