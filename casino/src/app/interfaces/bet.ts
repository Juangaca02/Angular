import { Game } from "./game";
import { User } from "./user";

export interface Bet {
  id: number;
  user_id: User;
  game_id: Game;
  description_bet: string;
  amount_bet: number;
}
