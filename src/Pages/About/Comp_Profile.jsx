const Comp_Profile = ({ collect }) => {
  return (
    <div className="flex items-center gap-3">
      <collect.icon className="text-2xl min-w-10" />
      <span className="text-xl">{collect.detail}</span>
    </div>
  );
};

export default Comp_Profile;
