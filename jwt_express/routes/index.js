import express from "express";
import {  Register, Login, Logout, Welcome } from "../controllers/Users.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { getOrders } from "../controllers/Orders.js";
 
const router = express.Router();

router.get('/', Welcome);
router.get('/products',verifyToken, getOrders);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;