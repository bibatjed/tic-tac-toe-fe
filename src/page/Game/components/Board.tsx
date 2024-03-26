import Tile from "./Tile";

interface BoardProps {
  board: string[];
  onClick: (id: number) => void;
}
export default function Board(props: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-5 text-white  mx-auto">
      {props.board.map((val, index) => {
        return <Tile key={index} id={index} value={val} onClick={() => val.length === 0 && props.onClick(index)} />;
      })}
    </div>
  );
}
