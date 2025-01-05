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
    <NavLink
      to={href}
      className="w-full text-gray-300 grid grid-cols-[auto_1fr] gap-5 p-3 bg-zinc-800 rounded-md"
    >
      <div className="bg-black w-28 md:min-w-40 aspect-square"></div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm">{description}</p>
        <ul className="hidden sm:block text-xs mt-2 border-t border-gray-500 pt-2">
          <li>Software: {software}</li>
          <li>Created at: {createdAt}</li>
          <li>Finish at: {finishAt}</li>
        </ul>
      </div>
        <ul className="col-span-2 sm:hidden text-xs mt-2 border-t border-gray-500 pt-2">
          <li>Software: {software}</li>
          <li>Created at: {createdAt}</li>
          <li>Finish at: {finishAt}</li>
        </ul>
    </NavLink>
  );
};

export default Comp_Card;
