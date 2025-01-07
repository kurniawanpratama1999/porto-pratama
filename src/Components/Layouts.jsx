import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import cName from "../Utils/cNames";
import { MdMenu } from "react-icons/md";
import { Helmet } from "react-helmet";

const cssNav = cName(
  {
    base: "flex border-gray-600 z-50",
    phone:
      "flex-col top-16 left-0 bg-zinc-800 h-auto max-md:border max-md:py-2 max-md:pl-3 max-md:pr-10 rounded-md gap-y-2",
    md: "md:grow md:flex-row md:top-0 md:left-0 md:static md:rounded-none md:bg-transparent md:items-center md:gap-5 md:pl-5 md:border-l-2",
  },
  {
    hidden: {
      true: "max-md:hidden",
      false: "absolute",
    },
  }
);

const cssHeading = cName({
  base: "text-xl font-bold",
  phone: "mx-auto",
  md: "md:mx-none",
});

const Layouts = () => {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {}, [pathname]);

  return (
    <div className="w-full min-h-dvh bg-zinc-900 relative">
      <header className="w-[90%] h-14 mx-auto bg-zinc-800 relative top-8 rounded-full border border-gray-800 flex gap-4 items-center text-gray-300 pl-5 pr-2 py-2">
        <h1 className={cssHeading({})}>
          <NavLink to={"/"}>PORTFOLIO.</NavLink>
        </h1>
        <button
          className="absolute md:hidden"
          onClick={() => setHidden(!hidden)}
        >
          <MdMenu className="text-2xl" />
        </button>
        <nav className={cssNav({ hidden })}>
          <NavLink
            to="/about"
            className={pathname.includes("about") && "font-semibold text-yellow-300"}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={pathname.includes("contact") && "font-semibold text-yellow-300"}
          >
            Contact
          </NavLink>
          <NavLink
            to="/project"
            className={pathname.includes("project") && "font-semibold text-yellow-300"}
          >
            Project
          </NavLink>
          <NavLink
            to="/reach-me"
            className="ml-auto py-2 px-5 rounded-full bg-amber-700 hidden md:block"
          >
            Reach Me
          </NavLink>
        </nav>
      </header>

      <Helmet>
        <title>
          {pathname === "/"
            ? "Portofolio Kurniawan Pratama"
            : `Porto | ${pathname
                .split("/")[1]
                .split("")
                .map((char, cIndex) =>
                  cIndex === 0 ? char.toUpperCase() : char
                )
                .join("")}`}
        </title>
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/527959/user-rounded.svg"
          type="image/svg"
        />
        <meta name="description" content="Kurniawan Pratama sedang mencari pekerjaan dibidang Software Engineer. Hubungi jika saya adalah kandidat yang cocok." />
      </Helmet>

      <Outlet />
    </div>
  );
};

export default Layouts;
