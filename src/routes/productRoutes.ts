import { Router } from "express";
import * as ctrl from "../controllers/productController";

const router = Router();

router.get("/", ctrl.getProducts);
router.get("/:id", ctrl.getProduct);
router.post("/", ctrl.createProduct);
router.put("/:id", ctrl.updateProduct);
router.delete("/:id", ctrl.deleteProduct);

export default router;
