import { Request, Response, NextFunction } from "express";
import UserService from "../services/userService";

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(UserService.getAll());
  } catch (err) {
    next(err);
  }
};

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Invalid payload" });
    const u = UserService.create(name, email);
    res.status(201).json(u);
  } catch (err) {
    next(err);
  }
};