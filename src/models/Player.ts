export enum PlayingPiece {
  X = 'X',
  O = 'O'
}

export class Player {
  constructor(
    public name: String,
    public playingPiece: PlayingPiece,
    public score: Number = 0
  ) {}
}