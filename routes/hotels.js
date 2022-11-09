import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create
router.post('/', verifyAdmin, createHotel);

// Update
router.put('/:id', verifyAdmin, updateHotel);

// Delete
router.delete('/:id', verifyAdmin, deleteHotel);

// Get
router.get('/:id', getHotel);

// Get all
router.get('/', getHotels);
router.get('/count/byCity', countByCity);
router.get('/count/byType', countByType);
router.get('/room/:hotelId', getHotelRooms);

export default router;
