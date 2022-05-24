import { Item } from "./item";

export abstract class Tray extends Item {
  protected _tray: Item[] = [];

  constructor(caption: string) {
    super(caption);
  }

  add(item: Item): void {
    this._tray.push(item);
  }
}
