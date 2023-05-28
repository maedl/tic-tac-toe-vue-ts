export enum GamePiece {
  X = 'X',
  O = 'O',
  EMPTY = ''
}

export class Player {
  constructor(
    public name: String,
    public GamePiece: GamePiece,
    public score: Number = 0
  ) {}
}