const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`pt-20 pb-10 min-h-[calc(100dvh-9rem)] flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
