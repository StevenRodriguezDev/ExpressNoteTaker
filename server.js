//dependencies
const express = require('express');
const path = require('path');
const uuid = require('.helpers/uuid');
const fsUtils = require('.helpers/fsUtils');
const dbDAta = require('./db/db.json')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();
//set up 

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use('/api',apiRoutes)
app.use('/',htmlRoutes)






// server
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

