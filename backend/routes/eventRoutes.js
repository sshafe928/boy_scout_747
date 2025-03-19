const express = require('express');
const router = express.Router();
const { getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');

router.get('/', getEvents);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
