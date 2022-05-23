import { PrintBanner } from "./printbanner";
import { Print } from "./print";

export class main {
  static main() {
    const printBanner: Print = new PrintBanner("これがadapterパターンや!");
    printBanner.printStrong();
    printBanner.printWeak();
  }
}

main.main();
