const express = require('express');
const app = express();
const dotenv = require('dotenv');
const itemsPool = require('./DBConfig');
const cors = require('cors');


app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = 5007; // Define port number

app.get('/', async (req, res) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM bookings'
        );
        const rows = allItems.rows; 
        res.json({ rows }); 
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

app.get("/:id", async (req, res) => {
    const id = req.params.id;
   
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM bookings WHERE id = $1', [id]
        );
        const rows = allItems.rows;
        res.json({ rows });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});


console.log('Using port:', PORT); // Debugging statement

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//module.exports = app;