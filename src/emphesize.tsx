export const Emphasize = ({
  children,
}: {
  children: string | number;
}) => {
  return (
    <em
      style={{
        background: "yellow",
        color: "black",
        fontSize: "40px",
      }}
    >
      {children}
    </em>
  );
};
