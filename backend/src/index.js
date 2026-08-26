import connectDB from './db/db.js';
import 'dotenv/config'
import express from 'express';


const PORT = process.env.PORT || 3000;
const app = express();

connectDB()

app.get('/', (req, res)=> {
    res.send(`<a href=http://localhost:${PORT}/api/links> api </a>`)
})

app.get('/api/links', (req, res)=> {
    const links = [
        {
            "title" : "Products",
            "link" : "www.amazon.in"
        },
        {
            "title" : "Products",
            "link" : "www.amazon.in"
        },
        
    ]
    res.send(links)
})

app.listen(PORT , ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})