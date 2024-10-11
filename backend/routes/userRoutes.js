import { Router } from 'express';
const router = Router();
import {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
  getAllUsers,
  updateUserStatus,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/logout', protect, logoutUser);
router.get('/all', protect, admin, getAllUsers);
router.put('/:id/status', protect, admin, updateUserStatus);

export default router;