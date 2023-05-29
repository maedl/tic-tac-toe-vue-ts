import { BoardItem } from "../models/BoardItem";
import { Game } from "../models/Game"

export const saveGameToStorage = (game: Game) => {
  localStorage.setItem('game', JSON.stringify(game));
}

export const getGameFromStorage = (): Game | null => {
  let gameJson = localStorage.getItem('game');

  if (gameJson) {
    const parsedGame = JSON.parse(gameJson);
    const board = parsedGame.board.map((item: any) => new BoardItem(item.index, item.id, item.placedPiece));
    return new Game(parsedGame.players, board);
  }

  return null;  
}

export const clearGameFromStorage = () => {
  localStorage.removeItem('game');
}