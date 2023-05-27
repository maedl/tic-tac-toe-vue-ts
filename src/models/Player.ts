export enum playingPiece {
  X = 'X',
  O = 'O'
}

export class Player {
  constructor(
    public name: String,
    public playingPiece: playingPiece,
    public score?: Number
  ) {
    this.score = 0;
  }
}