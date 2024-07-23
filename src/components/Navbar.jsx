import React from "react";
import { MdAddTask } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-center lg:justify-normal gap-2 items-center w-screen lg:h-[8vh] my-4 lg:my-0 lg:py-0 lg:px-4 text-2xl font-bold text-white">
      <a className="flex gap-2 items-center" href="/">
        <MdAddTask className="text-3xl" />
        <h1>Task Manager</h1>
      </a>
    </nav>
  );
};

export default Navbar;
