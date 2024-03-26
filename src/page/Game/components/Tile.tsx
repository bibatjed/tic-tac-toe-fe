import cn from "clsx";
interface TileProps {
  value: string;
  onClick: () => void;
  id: number;
}
export default function Tile(props: TileProps) {
  return (
    <div
      onClick={() => props.onClick()}
      className={cn("size-[90px] cursor-pointer pb-2 hover:bg-gray-900 flex items-center justify-center border-2 font-extrabold border-gray-700 text-white text-4xl shadow-xl bg-gray-800", {
        ["cursor-default hover:bg-transparent"]: props.value.length > 0,
        ["text-white"]: props.value === "X",
        ["text-yellow-400"]: props.value === "O",
      })}
    >
      {props.value}
    </div>
  );
}
