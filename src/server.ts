import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorHandler";

export function startServer(port = 5000) {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/api/products", productRoutes);
  app.use("/api/users", userRoutes);

  // global error handler
  app.use(errorHandler);

  app.listen(port, () => {
    console.log('E-Commerce API running on http://localhost:${port}');
  });
}