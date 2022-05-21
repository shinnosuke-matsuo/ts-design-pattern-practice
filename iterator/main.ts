import { BookShelf } from "./bookshelf";
import { Book } from "./book";
import { Iterator } from "./iterator";

export class main {
  static main() {
    const bookShelf: BookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book("ぬらりひょんの孫"));
    bookShelf.appendBook(new Book("ツバサクロニクル"));
    bookShelf.appendBook(new Book("文豪ストレイブック"));
    bookShelf.appendBook(new Book("戦国BASARA"));
    bookShelf.appendBook(new Book("刀剣乱舞"));
    bookShelf.appendBook(new Book("刀剣乱舞"));

    const it: Iterator<Book> = bookShelf.iterator();
    while (it.hasNext()) {
      const nextBook = it.next();
      console.log(nextBook.name);
    }
  }
}

main.main();
