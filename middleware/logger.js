// Function to log Middleware
// hello: req.hello in bootcamps.js controller available on all methods ie. req.user
// Custom loggin Middleware

// @desc    logs request url to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalURL}`
  );
  next();
};

module.exports = logger;
