const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('userData.db');

const fs = require('fs');
const createTableSQL = fs.readFileSync('users_table.sql', 'utf8');

db.serialize(() => {
    db.run(createTableSQL, (err) => {
        if (err) {
            console.error('Error creating "users" table:', err.message);
        } else {
            console.log('Successfully created "users" table.');
        }
    });
});

db.close();
