import { Product } from "./product";

export class IDCard extends Product {
  private _owner: string;

  constructor(owner: string) {
    super();
    this._owner = owner;
  }

  use() {
    console.log(`${this._owner}が使用しました。`);
  }

  get owner() {
    return this._owner;
  }
}
