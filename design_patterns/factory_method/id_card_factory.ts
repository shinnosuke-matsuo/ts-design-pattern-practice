import { Factory } from "./factory";
import { IDCard } from "./id_card";
import { Product } from "./product";

export class IDCardFactory extends Factory {
  createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  registerProduct(product: Product): void {
    console.log(`${product}さんを登録しました。`);
  }
}
