const express=require('express');
import * as ctrl from "../controllers/userController";

const router =express.Router();

router.get("/", ctrl.getUsers);
router.post("/", ctrl.createUser);

module.exports = router;