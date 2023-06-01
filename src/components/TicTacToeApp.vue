<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SelectPlayers from './SelectPlayers.vue';
import GameBoard from './GameBoard.vue';
import { getGameFromStorage, saveGameToStorage } from '../functions/localStorage';
import { BoardItem } from '../models/BoardItem';
import { GamePiece, Player } from '../models/Player';
import { Game, gameEndType } from '../models/Game';
import { GRID_LENGTH } from "../models/solutions";
import ScoreModal from './ScoreModal.vue';

const gameIsActive = ref<boolean>(false);
const activeGame = ref<Game>(new Game([],[], 0, GRID_LENGTH));
const gameBoard = ref<BoardItem[] >([]);
const modalActive = ref<boolean>(false);

onMounted(() => {
  checkForActiveGame()
})

const checkForActiveGame = () => {
  const storageCheck: Game | null = getGameFromStorage();

  if (storageCheck === null) {
    return gameIsActive.value = false;
  }
  else {
    resumeGame(storageCheck)
  }
  
}

const saveGameHistory = () => {
  if (activeGame.value) {
    saveGameToStorage(activeGame.value)
  }
}

const resumeGame = (game: Game) => {
  gameIsActive.value = true;
  activeGame.value = new Game(game.players, game.board, game.currentPlayerIndex, game.turnCount, game.gameOver, game.isWon, game.isDraw);
}

const createGameBoard = () => {
  for (let i = 0; i < GRID_LENGTH; i++) {
    gameBoard.value = [
      ...gameBoard.value,
      new BoardItem(i, i.toString())
  ];
  }
}

const clearGameboard = () => {
  activeGame.value.board = activeGame.value.board.map((item: BoardItem): BoardItem => {
    item.placedPiece = GamePiece.EMPTY
    return item;
  })
}

const handlePlayersState = (newPlayers: Player[]) => {
  activeGame.value.players = newPlayers;
  if (activeGame.value.players.length == 2) {
    createGameBoard();
    startNewGame(activeGame.value.players, gameBoard.value, GRID_LENGTH);
    gameIsActive.value = true;
  }
}

const startNewGame = (players: Player[], board: BoardItem[], turnCount:number) => {
  const randomIndex = Math.floor(Math.random() * 2);
  activeGame.value = new Game(players, board, randomIndex, turnCount);
}

const playAgain = () => {
  clearGameboard();
  startNewGame(activeGame.value.players, activeGame.value.board, GRID_LENGTH);
}

const handleGameState = (updatedBoard: BoardItem[]) => {
  const activeIndex = activeGame.value.currentPlayerIndex;
  const activeTurnCount = activeGame.value.turnCount
  activeGame.value = new Game(activeGame.value.players, updatedBoard, activeIndex, activeTurnCount);

  activeGame.value.checkSolution();
  
  saveGameHistory();

  if(activeGame.value.isWon) { 
    return gameOver(gameEndType.win);
  }

  if (activeGame.value.turnCount == 0) {
    gameOver(gameEndType.draw);
  }
}

const gameOver = (endType: gameEndType) => {
  switch (endType) {
    case gameEndType.win:
      updateWinnerScore();
    break;
    case gameEndType.draw:
    activeGame.value.isDraw = true;
    activeGame.value.gameOver = true;
    break;
    default:
    break;
  }
  saveGameHistory();
}

const updateWinnerScore = () => {
  activeGame.value.nextTurn();
  const winnerIndex = activeGame.value.currentPlayerIndex
  activeGame.value.players[winnerIndex].incrementScore();
}

const toggleModal = () => {
  modalActive.value = !modalActive.value;
}

</script>

<template>

  <div class="h-screen w-screen flex flex-col">

    <SelectPlayers 
      :players="activeGame.players" 
      @add-player="handlePlayersState" 
      v-if="!gameIsActive" 
    />
    <GameBoard 
      v-else
      :current-game="activeGame"
      @gameboard="handleGameState"
      @play-again="playAgain"
      @show-score="toggleModal"
    />
    
    <ScoreModal 
      :current-game="activeGame"
      :modalActive="modalActive" 
      @close-modal="toggleModal"
      ></ScoreModal>

  </div>

</template>
