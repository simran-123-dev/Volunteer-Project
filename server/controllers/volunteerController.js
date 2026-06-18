const User = require('../models/User');

exports.getVolunteers = async (req, res, next) => {
  try {
    const volunteers = await User.find({ role: 'volunteer' });
    res.json({ success: true, data: volunteers });
  } catch (error) {
    next(error);
  }
};

exports.getVolunteerById = async (req, res, next) => {
  try {
    const volunteer = await User.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ success: false, message: 'Volunteer not found' });
    }
    res.json({ success: true, data: volunteer });
  } catch (error) {
    next(error);
  }
};

exports.updateVolunteer = async (req, res, next) => {
  try {
    const volunteer = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!volunteer) {
      return res.status(404).json({ success: false, message: 'Volunteer not found' });
    }
    res.json({ success: true, data: volunteer });
  } catch (error) {
    next(error);
  }
};

exports.deleteVolunteer = async (req, res, next) => {
  try {
    const volunteer = await User.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ success: false, message: 'Volunteer not found' });
    }
    res.json({ success: true, message: 'Volunteer deleted' });
  } catch (error) {
    next(error);
  }
};
