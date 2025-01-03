import React from "react";
import { NavLink } from "react-router";

const Comp_Card = ({
  title,
  description,
  software,
  createdAt,
  finishAt,
  href,
}) => {
  return (
    <NavLink to={href} className="w-full text-gray-300 grid grid-cols-[auto_1fr] gap-5 p-3 bg-zinc-800 rounded-md">
      <div className="bg-black min-w-52 h-32"></div>
      <div>
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{description}</p>
        <ul className="text-xs mt-2 border-t border-gray-500 pt-2">
          <li>Software: {software}</li>
          <li>Created at: {createdAt}</li>
          <li>Finish at: {finishAt}</li>
        </ul>
      </div>
    </NavLink>
  );
};

export default Comp_Card;
