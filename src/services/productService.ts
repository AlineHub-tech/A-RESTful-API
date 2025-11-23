import DB from "../database/db";
import { Product } from "../models/Product";
import { v4 as uuidv4 } from "uuid";

class ProductService {
  getAll(): Product[] {
    return DB.products;
  }

  getById(id: string): Product | undefined {
    return DB.products.find(p => p.id === id);
  }

  create(payload: Omit<Product, "id">): Product {
    const product: Product = { id: uuidv4(), ...payload };
    DB.products.push(product);
    return product;
  }

  update(id: string, data: Partial<Product>): Product | null {
    const p = this.getById(id);
    if (!p) return null;
    Object.assign(p, data);
    return p;
  }

  delete(id: string): boolean {
    const idx = DB.products.findIndex(p => p.id === id);
    if (idx === -1) return false;
    DB.products.splice(idx, 1);
    return true;
  }
}

export default new ProductService();