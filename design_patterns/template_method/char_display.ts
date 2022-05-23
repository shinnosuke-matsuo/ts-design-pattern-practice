import { AbstractDisplay } from "./abstract_display";

export class CharDisplay extends AbstractDisplay {
  private _ch: string;

  constructor(char: string) {
    super();
    this._ch = char;
  }

  open() {
    console.log("<<");
  }

  print() {
    console.log(this._ch);
  }

  close() {
    console.log(">>");
  }
}
