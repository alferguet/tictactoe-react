import { Movement } from "./movement.interface";

export interface GameState {
  history: Movement[];
  xIsNext: boolean;
  stepNumber: number;
}
