const Logo = ({ ReactIcon, title }) => (
  <div className="lg:col-span-2 flex items-center justify-center gap-2 text-3xl">
    <ReactIcon />
    <span>{title}</span>
    <ReactIcon />
  </div>
);

const Head = ({ type = "double", data }) =>
  type === "double" ? (
    <>
      <p className="flex justify-between sm:gap-10 sm:text-xl font-bold">
        <span>{data.company}</span>
        <span>{data.year}</span>
      </p>
      <p className="flex justify-between sm:gap-10 sm:text-lg text-sm font-semibold border-b border-white/50 mb-1 pb-1">
        <span>{data.workAs}</span>
        <span>{data.etc}</span>
      </p>
    </>
  ) : (
    <p className="text-xl font-bold border-b border-white/50 mb-1 pb-1">
      {data.company}
    </p>
  );

const List = ({ datas }) => (
  <ul className="p-3 bg-zinc-800 rounded-md list-disc ml-5">
    {datas.map((data, index) => (
      <li key={index}>{data}</li>
    ))}
  </ul>
);

const Comp_Information = ({ val }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5">
      <Logo ReactIcon={val.logoIcon} title={val.logoTitle} />
      {val.headAndList.map((val, index) => (
        <div key={index} className="p-3 bg-zinc-800 rounded-md">
          <Head data={val.headData} type={val.headType} />
          <List datas={val.listData} />
        </div>
      ))}
    </div>
  );
};

export default Comp_Information;
