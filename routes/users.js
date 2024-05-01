const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User List</title>
            <style>
                body {
                    background-color: #121212;
                    color: #ffffff;
                    font-family: Arial, sans-serif;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    background-color: #212121;
                    color: #ffffff;
                }
                th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                th {
                    background-color: #424242;
                    color: #ffffff;
                }
            </style>
        </head>
        <body>
            <h1>User List</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Job Title</th>
                </tr>`;

        users.forEach(user => {
            html += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.job_title}</td>
                </tr>`;
        });

        html += `
            </table>
        </body>
        </html>`;

        res.send(html);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
