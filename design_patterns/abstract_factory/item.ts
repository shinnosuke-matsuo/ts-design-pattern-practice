export abstract class Item {
  protected _caption: string;

  constructor(caption: string) {
    this._caption = caption;
  }

  abstract makeHTML(): string;
}
