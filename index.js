const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const PORT = 8000;
const app = express();

// Middlewares
app.use(express.urlencoded({
    extended: false
}));

// Routes
app.get('/users', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User List</title>
        <style>
            table {
                font-family: Arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            th, td {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            th {
                background-color: #f2f2f2;
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
});

app.get('/api/users', (req, res) => {
    return res.json(users);
})

app.route('/api/users/:id')
    .get('/api/users/:id', (req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch('/api/users/:id', (req, res) => {
        const id = Number(req.params.id);
        const body = req.body;

        // Find the index of the user with the given id
        const index = users.findIndex((user) => user.id === id);

        // If user with the given id is not found, return 404
        if (index === -1) {
            return res.status(404).json({
                error: 'User not found.'
            });
        }

        // Update the user object with the new data
        const updatedUser = {
            ...users[index],
            ...body
        };
        users[index] = updatedUser;

        // Write data to file
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).json({
                    error: 'Internal server error.'
                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    user: updatedUser
                });
            }
        });
    })
    .delete('/api/users/:id', (req, res) => {
        const id = Number(req.params.id);

        // Find the index of the user with the given id
        const index = users.findIndex((user) => user.id === id);

        // If user with the given id is not found, return 404
        if (index === -1) {
            return res.status(404).json({
                error: 'User not found.'
            });
        }

        // Remove the user object at the found index
        users.splice(index, 1, );

        // Write data to file
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).json({
                    error: 'Internal server error.'
                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    message: 'user deleted'
                });
            }
        });
    });

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({
        id: users.length + 1,
        ...body
    });

    // Write data to file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({
                error: 'Internal server error.'
            });
        } else {
            return res.status(201).json({
                status: 'sucess',
                id: users.length
            })
        }
    });
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});