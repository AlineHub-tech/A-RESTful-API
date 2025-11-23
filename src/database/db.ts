import { Product } from "../models/Product";
import { User } from "../models/User";
import { v4 as uuidv4 } from "uuid";

const products: Product[] = [
  { id: uuidv4(), name: "Wireless Headphones", price: 79.99, stock: 25, description: "Comfortable wireless headphones" },
  { id: uuidv4(), name: "Coffee Mug", price: 9.99, stock: 100, description: "Ceramic mug 350ml" }
];

const users: User[] = [
  { id: uuidv4(), name: "Aline", email: "aline@example.com" }
];

export default {
  products,
  users
};