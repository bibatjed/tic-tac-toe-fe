import { useEffect, useState } from "react";
import Board from "./components/Board";
import { usePlayerContext } from "@src/context/PlayerContext";
import EndGameDialog from "./components/EndGameDialog";
import { Score } from "./types";
import ScoreBox from "./components/ScoreBox";
import { useNavigate } from "react-router-dom";
import Container from "@src/layout/Container";

import { checkDraw, checkWinner } from "./utility";
import { postGame } from "./api";
import { GameData } from "../Home/api";

type PlayerScore = {
  player1: Score;
  player2: Score;
};
function Game() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentSymbol, setCurrentSymbol] = useState("X");
  const navigate = useNavigate();
  const { player } = usePlayerContext();

  const [endGameDetails, setEndGameDetails] = useState({
    isOpen: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [score, setScore] = useState<PlayerScore>({
    player1: {
      wins: 0,
      losses: 0,
      draws: 0,
    },
    player2: {
      wins: 0,
      losses: 0,
      draws: 0,
    },
  });

  useEffect(() => {
    if (!player.player1 || !player.player2) {
      navigate("/", { replace: true });
    }
  }, [player]);

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setCurrentSymbol("X");
  };

  const setXPlayerWin = () => {
    setScore((prev) => {
      return {
        ...prev,
        player1: {
          ...prev.player1,
          wins: prev.player1.wins + 1,
        },
        player2: {
          ...prev.player2,
          losses: prev.player2.losses + 1,
        },
      };
    });
    setEndGameDetails({
      isOpen: true,
      message: `${player.player1} (X) Won!`,
    });
  };

  const setOPlayerWin = () => {
    setScore((prev) => {
      return {
        ...prev,
        player1: {
          ...prev.player1,
          losses: prev.player1.losses + 1,
        },
        player2: {
          ...prev.player2,
          wins: prev.player2.wins + 1,
        },
      };
    });
    setEndGameDetails({
      isOpen: true,
      message: `${player.player2} (O) Won!`,
    });
  };

  const setGameDraw = () => {
    setScore((prev) => {
      return {
        ...prev,
        player1: {
          ...prev.player1,
          draws: prev.player1.draws + 1,
        },
        player2: {
          ...prev.player2,
          draws: prev.player2.draws + 1,
        },
      };
    });

    setEndGameDetails({
      isOpen: true,
      message: `It's a draw!`,
    });
  };

  const handleBoxClick = (id: number) => {
    //UPDATE BOARD
    const updateBoard = [...board];
    updateBoard[id] = currentSymbol;

    setBoard(updateBoard);

    setCurrentSymbol((prev) => (prev === "X" ? "O" : "X"));
    //CHECK IF THERE'S A WINNER
    const winner = checkWinner(updateBoard);
    if (winner === "X") {
      setXPlayerWin();
      return;
    } else if (winner === "O") {
      setOPlayerWin();
      return;
    }
    //CHECK IF ALL TILES ARE FILLED
    const areAllTilesFiled = checkDraw(updateBoard);
    if (areAllTilesFiled) {
      setGameDraw();
    }
  };

  const handleStopGame = () => {
    const gameData = structuredClone(score);
    (gameData as GameData).player1.name = player.player1;
    (gameData as GameData).player2.name = player.player2;
    setIsLoading(true);
    postGame(gameData as GameData)
      .then(() => {
        navigate("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleContinueGame = () => {
    resetBoard();
    setEndGameDetails({ isOpen: false, message: "" });
  };

  return (
    <Container>
      <div className="mt-10 flex gap-10 flex-row justify-center items-center">
        <div className="h-36 w-40">
          <ScoreBox name={player.player1} isPlayer1 {...score.player1} />
        </div>
        <div className="h-36 w-40">
          <ScoreBox name={player.player2} {...score.player2} />
        </div>
      </div>

      <div className="w-full max-w-[354px] mx-auto mt-10">
        <Board board={board} onClick={handleBoxClick} />
      </div>

      <EndGameDialog isLoading={isLoading} onStop={handleStopGame} onContinue={handleContinueGame} isOpen={endGameDetails.isOpen} message={endGameDetails.message} />
    </Container>
  );
}

export default Game;
