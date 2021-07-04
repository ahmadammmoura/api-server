'use strict';
module.exports = (req, res, next) => {
  console.log('___REQUEST__', 'Method:', req.method, '----', 'Rout:', req.path);
  next();
};
