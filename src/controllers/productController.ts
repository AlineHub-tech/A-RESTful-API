import { Request, Response, NextFunction } from "express";
import ProductService from "../services/productService";

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = ProductService.getAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    const p = ProductService.getById(req.params.id);
    if (!p) return res.status(404).json({ message: "Product not found" });
    res.json(p);
  } catch (err) {
    next(err);
  }
};

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, stock, description } = req.body;
    if (!name || price == null || stock == null) return res.status(400).json({ message: "Invalid payload" });
    const newP = ProductService.create({ name, price, stock, description });
    res.status(201).json(newP);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = ProductService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    const ok = ProductService.delete(req.params.id);
    if (!ok) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
