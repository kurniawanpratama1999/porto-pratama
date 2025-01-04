import React from "react";

const Comp_Message = ({message}) => {
  return (
    <p className="italic text-xl text-center bg-gradient-to-r from-transparent via-black to-transparent py-2 rounded-full ">
      {message}
    </p>
  );
};

export default Comp_Message;
