
import DB from "../database/db";
import { User } from "../models/User";
import { v4 as uuidv4 } from "uuid";

class UserService {
  getAll(): User[] {
    return DB.users;
  }

  getById(id: string): User | undefined {
    return DB.users.find(u => u.id === id);
  }

  create(name: string, email: string): User {
    const user: User = { id: uuidv4(), name, email };
    DB.users.push(user);
    return user;
  }
}

export default new UserService();