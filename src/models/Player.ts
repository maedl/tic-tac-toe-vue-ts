export enum GamePiece {
  X = 'X',
  O = 'O',
  EMPTY = ''
}

export class Player {
  constructor(
    public name: string,
    public GamePiece: GamePiece,
    public score: number = 0
  ) {}
  incrementScore() {
    this.score += 1;
  }
}