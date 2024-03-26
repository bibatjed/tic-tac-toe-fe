import http from "@src/http";
import { GameData } from "@src/page/Home/api";
export const postGame = async (data: GameData): Promise<void> => {
  await http.post("/v1/games", data);
};
