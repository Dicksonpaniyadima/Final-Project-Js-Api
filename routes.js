module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/products')(router);
  require('./routes/carts')(router);

  return router;
};