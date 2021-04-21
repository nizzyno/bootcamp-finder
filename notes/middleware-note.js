// Function to log Middleware
// hello: req.hello in bootcamps.js controller available on all methods ie. req.user
// Custom loggin Middleware
// importing Morgan to use on this project

// @desc    logs request url to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalURL}`
  );
  next();
};

module.exports = logger;

// Function call for Middleware logger
// insert function call in desired page and require through local path
app.use(logger);
