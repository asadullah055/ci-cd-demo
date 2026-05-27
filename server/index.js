import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:3000',
    ],
    credentials: true,
}));

// api routes
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
