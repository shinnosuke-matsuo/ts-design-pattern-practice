import { Builder } from "./builder";

export class HtmlBuilder extends Builder {
  private _html: string[] = [];

  makeTitle(title: string): void {
    this._html.push(`<html><head><title>${title}</title></head><body>`);
    this._html.push(`<h1>${title}</h1>`);
  }

  makeString(str: string): void {
    this._html.push(`<p>${str}</p>`);
  }

  makeItems(items: string[]): void {
    this._html.push("<ul>");
    items.forEach((item) => {
      this._html.push(`<li>${item}<li/>`);
    });
    this._html.push("</ul>");
  }

  close(): void {
    this._html.push("</body></_html>");
  }

  getResult(): string {
    return this._html.join("");
  }
}
