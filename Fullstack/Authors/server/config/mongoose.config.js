const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/beltreview2db')
  .then(() => console.log('Database connection establish...'))
  .catch((err) => console.log('Something went wrong with DB ', err));
