const Textarea = ({
  label,
  htmlFor,
  cLabel = "",
  className = "",
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`relative h-fit flex flex-col pt-4 pb-2 text-gray-300 bg-zinc-900 border border-gray-300 rounded-md focus-within:border-emerald-300 [&_p]:focus-within:text-emerald-300 ${cLabel}`}
    >
      <p className="absolute -top-3 left-3 bg-zinc-900 px-3">{label}</p>
      <textarea
        name={htmlFor}
        style={{ resize: "none" }}
        className={`grow bg-transparent p-2 min-h-24 border-none outline-none ${className}`}
        {...props}
      />
      <span className="text-right px-2 pt-2">200</span>
    </label>
  );
};

export default Textarea;
