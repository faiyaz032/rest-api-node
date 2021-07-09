function notFoundHandler(req, res, next) {
   res.status(404).json({ error: 'Your requested URL was not found' });
}

function defaultErrorHandler(error, req, res, next) {
   if (res.headerSent) {
      next('There was a problem - Header already sent');
   } else {
      if (error) {
         res.status(500).json({ error: error.message });
      }
   }
}

module.exports = { defaultErrorHandler, notFoundHandler };
