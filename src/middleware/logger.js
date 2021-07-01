'use strict';
module.exports = (req, res, next) => {
  console.log('__REQUEST__', 'Method:', req.method, '----', 'Rout:', req.path);
  next();
};
