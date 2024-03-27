import { Disclosure } from "@headlessui/react";
import DownArrowSrc from "@src/assets/icon-arrow-down.svg";

interface ScoreBoardItemProps {
  player1: {
    name: string;
    wins: number;
    losses: number;
    draws: number;
  };
  player2: {
    name: string;
    wins: number;
    losses: number;
    draws: number;
  };
}
export default function ScoreBoardItem(props: ScoreBoardItemProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="bg-white hover:cursor-pointer flex flex-col justify-center p-2 gap-5 rounded-lg relative">
          <Disclosure.Button className="bg-white hover:cursor-pointer flex flex-row justify-center sm:justify-around items-center p-5 gap-5 rounded-lg relative">
            <div className="flex flex-row font-bold items-center gap-0.5">
              <h2 className="text-md md:text-lg font-bold max-w-[110px] truncate">{props.player1.name}</h2>
              <span className="text-green-500 font-bold">({props.player1.wins})</span>
            </div>

            <span className="text-xl md:text-2xl text-red-500 sm:absolute font-extrabold">VS</span>

            <div className="flex flex-row font-bold items-center gap-0.5">
              <h2 className="text-md md:text-lg font-bold max-w-[110px] truncate">{props.player2.name}</h2>
              <span className="text-green-500 font-bold">({props.player2.wins})</span>
            </div>
            <img className={`ml-7 h-3 w-4 absolute right-2 top-8 transition ${open ? "rotate-180" : " rotate-0"}`} src={DownArrowSrc} alt="down-arrow" />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 text-sm bg-white text-black">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col basis-1/2 md:basis-1/4 gap-1 font-bold">
                <div className="flex">
                  <span className="basis-2/3">Wins:</span>
                  <span>{props.player1.wins}</span>
                </div>

                <div className="flex">
                  <span className="basis-2/3">Losses:</span>
                  <span>{props.player1.losses}</span>
                </div>
                <div className="flex">
                  <span className="basis-2/3">Draws:</span>
                  <span>{props.player1.draws}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 basis-1/2 md:basis-1/4 font-bold">
                <div className="flex">
                  <span className="basis-2/3">Wins:</span>
                  <span>{props.player2.wins}</span>
                </div>

                <div className="flex">
                  <span className="basis-2/3">Losses:</span>
                  <span>{props.player2.losses}</span>
                </div>
                <div className="flex">
                  <span className="basis-2/3">Draws:</span>
                  <span>{props.player2.draws}</span>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
