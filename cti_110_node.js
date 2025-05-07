// Load required modules
const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();

// PostgreSQL connection setup
const connectionString = `postgres://postgres:CTI_110_WakeTech@localhost/Gradebook`;
const pool = new Pool({ connectionString: connectionString });

// Serve static files from the "public" directory (JS, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// API route to get grade data
app.get('/api/grades', function (req, res) {
    pool.query(
        `SELECT Students.student_id, first_name, last_name, AVG(assignments.grade) as total_grade
         FROM Students
         LEFT JOIN Assignments ON Assignments.student_id = Students.student_id
         GROUP BY Students.student_id
         ORDER BY total_grade DESC`,
        [],
        function (err, result) {
            if (err) {
                console.error("Database error:", err);
                res.status(500).send("Error querying the database.");
                return;
            }

            // Optional server-side logging
            result.rows.forEach(function (row) {
                console.log(`Student Name: ${row.first_name} ${row.last_name}`);
                console.log(`Grade: ${row.total_grade}`);
            });

            res.status(200).json(result.rows); // Send JSON to client
        }
    );
});

// Route to serve the main gradebook HTML page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'gradebook.html'));
});

// Start the server
const server = app.listen(3000, function () {
    console.log("App Server via Express is listening on port 3000");
    console.log("Visit http://localhost:3000 to view your gradebook.");
});
