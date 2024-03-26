import { ChangeEvent, useEffect, useState } from "react";
import { usePlayerContext } from "@src/context/PlayerContext";
import { useNavigate } from "react-router-dom";
import DialogWrapper from "@src/components/DialogWrapper";
import Input from "@src/components/Input";
import Button from "@src/components/Button";

interface StartGameDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function StartGameDialog(props: StartGameDialogProps) {
  const { setPlayer } = usePlayerContext();

  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState({
    player1: "",
    player2: "",
  });

  useEffect(() => {
    if (props.isOpen) {
      setPlayerName({
        player1: "",
        player2: "",
      });
    }
  }, [props.isOpen]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName((prevPlayer) => {
      return {
        ...prevPlayer,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleStartNewGame = () => {
    setPlayer(playerName);
    navigate("/game");
  };
  return (
    <DialogWrapper title="Create New Game" isOpen={props.isOpen}>
      <div className="flex flex-col gap-4 mt-3">
        <h3 className="font-bold text-lg">Please enter the player names</h3>
        <div>
          <label className="font-bold text-md">Player 1 (X)</label>
          <Input onChange={handleOnChange} name="player1" value={playerName.player1} />
        </div>

        <div>
          <label className="font-bold text-md">Player 2 (O)</label>
          <Input onChange={handleOnChange} name="player2" value={playerName.player2} />
        </div>

        <div className="flex flex-row justify-end gap-2 items-center">
          <div className="h-14 w-28">
            <Button onClick={props.onClose} text="Cancel" variant="secondary" />
          </div>
          <div className="h-14 w-28">
            <Button disabled={playerName.player1.length === 0 || playerName.player2.length === 0} onClick={handleStartNewGame} text="Start" variant="primary" />
          </div>
        </div>
      </div>
    </DialogWrapper>
  );
}
