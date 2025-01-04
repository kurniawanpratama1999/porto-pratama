const Comp_Profile = ({ ReactIcon, detail }) => {
  return (
    <div className="flex items-center gap-3">
      <ReactIcon className="text-4xl" />
      <span className="text-3xl">{detail}</span>
    </div>
  );
};

export default Comp_Profile;
