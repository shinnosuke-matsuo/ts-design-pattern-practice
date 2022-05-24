import { Item } from "./item";

export abstract class Link extends Item {
  protected _url: string;

  constructor(caption: string, url: string) {
    super(caption);
    this._url = url;
  }
}
