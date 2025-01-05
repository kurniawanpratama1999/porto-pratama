import React from "react";

const Comp_Action = ({handleSubmit}) => {
  return (
    <div className="flex gap-3 justify-center col-span-2">
      <button className="px-2 py-1 bg-gray-400 rounded-md">Mulai Ulang</button>
      <button
        onClick={handleSubmit}
        className="px-2 py-1 bg-emerald-400 rounded-md"
      >
        Kirim Pesan
      </button>
    </div>
  );
};

export default Comp_Action;
