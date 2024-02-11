const express = require('express');
const app = express();
const dotenv = require('dotenv');
const itemsPool = require('./DBConfig');

app.use(express.json());
dotenv.config();


app.get('/', async (req, res) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM bookings'
        );
        res.json({ allItems });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

// app.listen(5070, () => {
//     console.log("Server running on port 5070");
// })

module.exports = app;