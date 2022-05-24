import { Display } from "./display";
import { DisplayImpl } from "./display_impl";

export class CountDisplay extends Display {
  constructor(impl: DisplayImpl) {
    super(impl);
  }

  multiDisplay(times: number) {
    this.open();
    for (let i: number = 0; i < times; i++) {
      this.print();
    }
    this.close();
  }
}
