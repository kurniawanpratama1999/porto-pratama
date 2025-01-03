import React from "react";
import { NavLink, Outlet } from "react-router";

const Layouts = () => {
  return (
    <div className="w-full min-h-dvh bg-black/90">
      <header className="w-[90%] h-14 mx-auto bg-black/80 relative top-8 rounded-full border border-gray-800 flex gap-4 items-center text-gray-300 pl-5 pr-2 py-2">
        <h1 className="text-xl font-bold">PORTFOLIO.</h1>
        <nav className="grow h-full border-l-2 border-gray-600 flex items-center gap-5 pl-5">
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/project'>Project</NavLink>
          <NavLink to='/reach-me' className="ml-auto py-2 px-5 rounded-full bg-amber-700">
            Reach Me
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

export default Layouts;
