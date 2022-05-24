import { DisplayImpl } from "./display_impl";

export class Display {
  private _impl: DisplayImpl;

  constructor(impl: DisplayImpl) {
    this._impl = impl;
  }

  open(): void {
    this._impl.rawOpen();
  }

  print(): void {
    this._impl.rawPrint();
  }

  close(): void {
    this._impl.rawClose();
  }

  display(): void {
    this.open();
    this.print();
    this.close();
  }
}
