import { Builder } from "./builder";

export class TextBuilder extends Builder {
  private _sentence: string[] = [];

  makeTitle(title: string): void {
    this._sentence.push("====================\n");
    this._sentence.push(`「${title}」\n`);
  }

  makeString(str: string): void {
    this._sentence.push(`■${str}\n`);
  }

  makeItems(items: string[]): void {
    items.forEach((item) => this._sentence.push(`・${item}\n`));
  }

  close(): void {
    this._sentence.push("====================\n");
  }

  getResult(): string {
    return this._sentence.join("");
  }
}
