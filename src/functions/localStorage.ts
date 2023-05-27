import { Player } from "../models/Player"

export const savePlayersToStorage = (players: Player[]) => {
  localStorage.setItem('players', JSON.stringify(players));
}

export const getPlayersFromStorage = ():Player[] | null => {
  let playersJson = localStorage.getItem('players');

  if (playersJson) {
    const parsedPlayers = JSON.parse(playersJson);
    const players = parsedPlayers.map((player: any) => {
      return new Player(player.name, player.playingPiece, player.score);
    });

    return players;
  }

  return null;
}

export const clearPlayersFromStorage = () => {
  localStorage.removeItem('players');
}