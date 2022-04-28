import express from "express";
const router = express.Router();
import { requireSignIn } from "../middlewares/index";
import { register, login, currentUser } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/currentuser", requireSignIn, currentUser);

module.exports = router;
