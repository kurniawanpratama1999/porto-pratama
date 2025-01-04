const Comp_Profile = ({ collect }) => {
  return (
    <div className="flex items-center gap-3">
      <collect.icon className="text-4xl" />
      <span className="text-3xl">{collect.detail}</span>
    </div>
  );
};

export default Comp_Profile;
