export class Singleton {
  private static readonly _singleton = new Singleton();

  private constructor() {
    console.log("インスタンスを生成しました。");
  }

  static get instance(): Singleton {
    return this._singleton;
  }
}
