import http from "@src/http";
interface PlayerData {
  name: string;
  wins: number;
  losses: number;
  draws: number;
}

export interface GameData {
  player1: PlayerData;
  player2: PlayerData;
}

export interface GamesResult {
  result: GameData[];
  pages: number;
}

export const getGames = async (page: number = 1): Promise<GamesResult> => {
  const result = await http.get("/v1/games", {
    params: {
      page,
    },
  });

  return result.data;
};
