import { Print } from "./print";
import { Banner } from "./banner";

export class PrintBanner extends Print {
  private _banner: Banner;

  constructor(string: string) {
    super();
    this._banner = new Banner(string);
  }

  printWeak(): void {
    this._banner.showWithParen();
  }

  printStrong(): void {
    this._banner.showWithAster();
  }
}
