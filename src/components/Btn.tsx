type props = {
  child: string;
  variant: "primary" | "secondary" | "whiteBg";
};

const Btn = (props: props) => {
  let classBtn: string = "";
  if (props.variant === "primary") {
    classBtn =
      "bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg";
  } else if (props.variant === "secondary") {
    classBtn =
      "bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors";
  } else {
    classBtn =
      "px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-colors duration-200";
  }
  return (
    <button className={`cursor-pointer ${classBtn}`}>{props.child}</button>
  );
};

export default Btn;
