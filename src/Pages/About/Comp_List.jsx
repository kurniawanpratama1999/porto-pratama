import cName from "../../Utils/cNames.js";

const cssMenu = cName(
  { bases: "ml-10" },
  {
    list: {
      decimal: "list-decimal",
      disc: "list-disc",
    },
  }
);

const cssList = cName({bases: 'h-auto mt-2'}, {});

export const Comp_Menu = ({ children, list = "decimal" }) => {
  return <ul className={cssMenu({ list })}>{children}</ul>;
};

export const Comp_List = ({ children }) => {
  return <li className="mt-2">{children}</li>;
};
