const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CarModel = require('./dbcarinfo');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Car', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// POST route to add a car service entry
app.post('/service', (req, res) => {
    CarModel.create(req.body)
        .then(car => res.json(car))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Home route
app.get("/", (req, res) => {
    res.set({ "Access-Control-Allow-Origin": "*" });
    res.json({ message: "Welcome to the Car service API!" });
});

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
