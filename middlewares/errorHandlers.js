function notFoundHandler(req, res, next) {
   res.status(404).json({ error: 'Your requested URL was not found' });
}

function defaultErrorHandler(error, req, res, next) {
   if (res.headerSent) {
      return next(error);
   }
   res.status(500).json({ error });
}

module.exports = { defaultErrorHandler, notFoundHandler };
