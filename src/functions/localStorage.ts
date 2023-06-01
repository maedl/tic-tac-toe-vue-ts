import { BoardItem } from "../models/BoardItem";
import { Game } from "../models/Game"
import { Player } from "../models/Player";

export const saveGameToStorage = (game: Game) => {
  localStorage.setItem('game', JSON.stringify(game));
}

export const getGameFromStorage = (): Game | null => {
  let gameJson = localStorage.getItem('game');

  if (gameJson) {
    const parsedGame: Game = JSON.parse(gameJson);
    
    console.log('Parsed game from storage:', parsedGame);
    
    const board = parsedGame.board.map((item: BoardItem) => new BoardItem(item.index, item.id, item.placedPiece));
    const players = parsedGame.players.map((player: Player) => new Player(player.name, player.GamePiece, player.score))
    return new Game(
      players, 
      board, 
      Number(parsedGame.currentPlayerIndex),
      parsedGame.turnCount,
      parsedGame.gameOver,
      parsedGame.isWon,
      parsedGame.isDraw
    );
  }

  return null;  
}

export const clearGameFromStorage = () => {
  localStorage.removeItem('game');
}