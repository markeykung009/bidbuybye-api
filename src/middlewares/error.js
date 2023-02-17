module.exports = (err, req, res, next) => {
  console.log(err);

  if (err.name === 'ValidationError') {
    err.statusCode = 400;
  } else if (err.name === 'SequlizeForeignKeyConstraintError') {
    err.statusCode = 400;
  }

  res.status(err.statusCode || 500).json({ message: err.message });
};
