import { Aggregate } from "./aggregate";
import { Book } from "./book";
import { Iterator } from "./iterator";
import { BookShelfIterator } from "./bookshelfiterator";

export class BookShelf implements Aggregate<Book> {
  private _books: Book[];
  private _last: number = 0;

  constructor(maxsize: number) {
    this._books = new Array(maxsize);
  }

  getBookAt(index: number): Book {
    return this._books[index];
  }

  appendBook(book: Book): void {
    this._books[this._last] = book;
    this._last++;
  }

  get length(): number {
    return this._last;
  }

  iterator(): Iterator<Book> {
    return new BookShelfIterator(this);
  }
}
