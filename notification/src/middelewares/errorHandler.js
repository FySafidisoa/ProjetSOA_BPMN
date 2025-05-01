const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Erreur interne du serveur',
      stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
    });
  };
  
  export default errorHandler;
  