import { createContext, ReactNode, useContext, useState } from "react";

interface IPlayerContext {
  player: {
    player1: string;
    player2: string;
  };
  setPlayer: ({ player1, player2 }: { player1: string; player2: string }) => void;
}
const PlayerContext = createContext<null | IPlayerContext>(null);

export default function UserContextProvider(props: { children: ReactNode | ReactNode[] }) {
  const [player, setPlayer] = useState<IPlayerContext["player"]>({
    player1: "",
    player2: "",
  });

  return <PlayerContext.Provider value={{ player, setPlayer }}>{props.children}</PlayerContext.Provider>;
}

export function usePlayerContext() {
  const user = useContext(PlayerContext);
  if (!user) {
    throw new Error("Player Context is required");
  }
  return user;
}
