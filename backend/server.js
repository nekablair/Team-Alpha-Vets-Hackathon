import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.get('/',(req,res)=>{
    res.send('API IS RUNNING 200 OK')
})

app.listen(PORT,()=> console.log(`Server is running on ${PORT}`))