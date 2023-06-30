import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import vaRoutes from './routes/vaRoutes.js';
import connectDB from './config/db.js';
import colors from 'colors';
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

//TEST ROUTE
// app.get('/', (req, res) => {
//   res.send('API IS RUNNING 200 OK');
// });

//for body parsing the req.body in routes&controllers
app.use(express.json());

//ROUTES
app.use('/api/va', vaRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
