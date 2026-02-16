const express = require("express");
const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Internship Task 3 REST API");
});

// GET Route
app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Salman" },
        { id: 2, name: "Ali" }
    ]);
});

// POST Route
app.post("/students", (req, res) => {
    const student = req.body;
    res.json({
        message: "Student added successfully",
        student
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
