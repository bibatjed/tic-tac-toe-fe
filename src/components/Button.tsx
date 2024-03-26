import cn from "clsx";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withAddIcon?: boolean;
  text: string;
  variant: "primary" | "secondary" | "tertiary" | "danger";
}
export default function Button(props: IButton) {
  return (
    <button
      className={cn("rounded-full  h-full w-full", {
        ["opacity-55"]: props.disabled,
        ["bg-purple-600 text-white hover:bg-purple-800"]: props.variant === "primary",
        ["bg-gray-600 font-semibold text-white hover:bg-gray-800"]: props.variant === "secondary",
      })}
      {...props}
    >
      <div className="flex items-center justify-center gap-2.5">
        <span className="text-[15px]">{props.text}</span>
      </div>
    </button>
  );
}
