import { BoardItem } from "./BoardItem";

export const GRID_LENGTH: number = 9;

export const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const createSolutionBoard = () => {
  // for (let i = 0; i < solutions.length; i++) {
  //   gameBoard.value = [
  //     ...gameBoard.value,
  //     new BoardItem(i, i.toString())
  // ];
  // }

  const solutionGrids: BoardItem[] = []

  for (let i = 0; i < winningCombinations.length; i++)  {

    for (let j = 0; j < GRID_LENGTH; j++) {

      

    }

  }
}