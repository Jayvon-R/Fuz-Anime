const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database('./userData.db');

db.run(
  'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT, password TEXT)',
  (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Table "users" created successfully.');
    }
  }
);

app.post('/register', (req, res) => {
  const username = req.body.user;
  const password = req.body.password;

  db.run(
    'INSERT INTO users (user, password) VALUES (?, ?)',
    [username, password],
    (err) => {
      if (err) {
        console.error('Error inserting data:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data inserted successfully.');
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
