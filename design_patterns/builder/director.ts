import { Builder } from "./builder";

export class Director {
  private _builder: Builder;

  constructor(builder: Builder) {
    this._builder = builder;
  }

  construct(): void {
    this._builder.makeTitle("Greeting");
    this._builder.makeString("一般的な挨拶");
    this._builder.makeItems(["How are you", "Hello"]);
    this._builder.makeString("時間帯の挨拶");
    this._builder.makeItems(["Good mornig", "Good night"]);
    this._builder.close();
  }
}
