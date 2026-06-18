const express = require('express');
const {
  getVolunteers,
  getVolunteerById,
  updateVolunteer,
  deleteVolunteer,
} = require('../controllers/volunteerController');

const router = express.Router();

router.get('/', getVolunteers);
router.get('/:id', getVolunteerById);
router.put('/:id', updateVolunteer);
router.delete('/:id', deleteVolunteer);

module.exports = router;
