import { Score } from "../types";
import cn from "clsx";
interface ScoreBoxProps extends Score {
  name: string;
  isPlayer1?: boolean;
}
export default function ScoreBox(props: ScoreBoxProps) {
  return (
    <div
      className={cn("size-full rounded-md p-3", {
        ["bg-white text-black"]: props.isPlayer1,
        ["bg-yellow-400"]: !props.isPlayer1,
      })}
    >
      <div className="flex font-bold">
        <h3 className="text-md truncate max-w-20">{props.name}</h3>
        <span>({props.isPlayer1 ? "X" : "O"})</span>
      </div>
      <div className="flex flex-col gap-1 mt-3 font-bold">
        <div className="flex">
          <span className="basis-2/3">Wins:</span>
          <span>{props.wins}</span>
        </div>

        <div className="flex">
          <span className="basis-2/3">Losses:</span>
          <span>{props.losses}</span>
        </div>

        <div className="flex">
          <span className="basis-2/3">Draws:</span>
          <span>{props.draws}</span>
        </div>
      </div>
    </div>
  );
}
