export class Player {
  constructor(
    public name: String,
    public playingPiece: string,
    public score?: Number
  ) {
    this.score = 0;
  }
}