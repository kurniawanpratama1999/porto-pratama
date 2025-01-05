const Input = ({
  label,
  htmlFor,
  type,
  cLabel = "",
  className = "",
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`relative h-fit flex pt-4 pb-2 text-gray-300 bg-zinc-900 border border-gray-300 rounded-md focus-within:border-emerald-300 [&_p]:focus-within:text-emerald-300 ${cLabel}`}
    >
      <p className="absolute -top-3 left-3 bg-zinc-900 px-3">{label}</p>
      <input
        type={type}
        name={htmlFor}
        className={`grow bg-transparent px-3 py-1 border-none outline-none ${className}`}
        spellCheck="false"
        {...props}
      />
    </label>
  );
};

export default Input;
