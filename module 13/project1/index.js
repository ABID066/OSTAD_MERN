import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT

app.listen(8000,()=>{
    console.log(`Server is running at ${PORT}`);
})