import express from 'express';
import dotenv from "./config/dotenv.js"
import giftsRouter from "./routes/gifts.js";
import cors from "cors"; 

const app = express(); 
app.use(cors());
app.use(express.json());

app.use("/gifts", giftsRouter);
app.get("/", (req, res) => {
    res.status(200).send(
        `
        <h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>
        `
    );
}); 

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
})