import 'dotenv/config'; 

import express from 'express';
import dbConnect from './config/db.config.js';
import router from './routes/products.route.js';

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(router);


dbConnect();

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully!"
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`); 
});
