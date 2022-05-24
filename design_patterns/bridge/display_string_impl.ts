import { DisplayImpl } from "./display_impl";

export class StringDisplayImpl implements DisplayImpl {
  private _string: string;
  private _width: number;

  constructor(string: string) {
    this._string = string;
    this._width = string.length;
  }

  rawOpen(): void {
    this.printLine();
  }

  rawPrint(): void {
    console.log("|" + this._string + "|");
  }

  rawClose(): void {
    this.printLine();
  }

  printLine(): void {
    console.log("+");
    for (let i: number = 0; i < this._width; i++) {
      console.log("-");
    }
    console.log("+");
  }
}
