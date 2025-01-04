import { FaRunning } from "react-icons/fa";

const Comp_Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      <div className="col-span-2 flex items-center justify-center gap-2 text-3xl">
        <FaRunning />
        <span>Skills</span>
        <FaRunning />
      </div>
      <div className="p-3 bg-zinc-800 rounded-md">
        <p className="text-xl font-bold border-b border-white/50 mb-1 pb-1">
          Soft Skill
        </p>
        <ul className="list-disc ml-5">
          <li>Public speaking.</li>
          <li>Sosialisasi.</li>
          <li>Kerjasama tim.</li>
          <li>Jujur, Adil, dan Bertanggung Jawab.</li>
          <li>Berpikir kritis.</li>
        </ul>
      </div>
      <div className="p-3 bg-zinc-800 rounded-md">
        <p className="text-xl font-bold border-b border-white/50 mb-1 pb-1">
          Hard Skill
        </p>
        <ul className="list-disc ml-5">
          <li>Javascript.</li>
          <li>React Javascript.</li>
          <li>SQL Query.</li>
          <li>Database MySQL.</li>
          <li>HTML.</li>
          <li>CSS, Tailwind.</li>
          <li>Rumus-rumus Microsoft Excel.</li>
          <li>VBA Micorosoft Excel.</li>
        </ul>
      </div>
    </div>
  );
};

export default Comp_Skills;
