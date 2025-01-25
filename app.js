import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
import dotenv from 'dotenv';
dotenv.config();

// Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});