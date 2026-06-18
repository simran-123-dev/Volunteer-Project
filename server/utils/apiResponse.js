exports.successResponse = (res, statusCode, data) => {
  res.status(statusCode).json({ success: true, data });
};

exports.errorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ success: false, message });
};
