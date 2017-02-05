const sqlite3 = require('sqlite3').verbose();
const {db_name, table_name} = require('./config');
const db = new sqlite3.Database(db_name);

const title = process.argv[2];

db.run(`CREATE TABLE IF NOT EXISTS ${table_name} (title TEXT)`);
db.run(`INSERT INTO ${table_name} VALUES (?)`, title);

db.each(`SELECT rowid AS id, title FROM ${table_name}`, function(err, row) {
    console.log(row.id + ": " + row.title);
});
db.close();