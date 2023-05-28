import { Game } from "../models/Game"

export const saveGameToStorage = (game: Game) => {
  localStorage.setItem('game', JSON.stringify(game));
}

export const getGameFromStorage = (): Game | null => {
  let gameJson = localStorage.getItem('game');

  if (gameJson) {
    const parsedGame = JSON.parse(gameJson);
    return new Game(parsedGame.players, parsedGame.board);
  }

  return null;  
}

export const clearGameFromStorage = () => {
  localStorage.removeItem('game');
}