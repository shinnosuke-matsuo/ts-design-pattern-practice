import { Product } from "./product";

export abstract class Factory {
  create(owner: string) {
    const newProduct = this.createProduct(owner);
    this.registerProduct(newProduct);

    return newProduct;
  }

  abstract createProduct(owner: string): Product;
  abstract registerProduct(product: Product): void;
}
