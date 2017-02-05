const sqlite3 = require('sqlite3').verbose();
const {db_name, table_name} = require('./config');
const db = new sqlite3.Database(db_name);

db.each(`SELECT rowid AS id, title FROM ${table_name}`, function(err, row) {
    console.log(row.id + ": " + row.title);
});
db.close();