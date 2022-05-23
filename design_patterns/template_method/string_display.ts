import { AbstractDisplay } from "./abstract_display";

export class StringDisplay extends AbstractDisplay {
  private _str: string;

  constructor(char: string) {
    super();
    this._str = char;
  }

  open() {
    this.printLine();
  }

  print() {
    console.log("|" + this._str + "|");
  }

  close() {
    this.printLine();
  }

  private printLine(): void {
    console.log("+" + Array(this._str.length + 1).join("-") + "+");
  }
}
