import { Book } from "./book";
import { Iterator } from "./iterator";
import { BookShelf } from "./bookshelf";

export class BookShelfIterator implements Iterator<Book> {
  private _bookshelf: BookShelf;
  private _index: number;

  constructor(bookshelf: BookShelf) {
    this._bookshelf = bookshelf;
    this._index = 0;
  }

  hasNext() {
    return this._index < this._bookshelf.length;
  }

  next() {
    if (!this.hasNext()) {
      throw console.log("本棚がいっぱいです");
    }

    const nextBook = this._bookshelf.getBookAt(this._index);
    this._index++;
    return nextBook;
  }
}
