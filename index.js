import 'dotenv/config'; 

import express from 'express';
import dbConnect from './config/db.config.js';
import router from './routes/products.route.js';

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(router);


dbConnect();


app.listen(port, () => {
  console.log(`Server running on port ${port}`); 
});
