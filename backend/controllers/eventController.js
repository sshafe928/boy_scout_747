const Event = require('../models/events');


const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ success: true, data: events });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch events' });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    res.json({ success: true, data: updatedEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update event' });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    res.json({ success: true, message: 'Event deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to delete event' });
  }
};

module.exports = { getEvents, updateEvent, deleteEvent };

