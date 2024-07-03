const {Client} = require('pg');
const pg_config = require('./models/pg _config.js');

const client = new Client(pg_config);
async function test() {
await client.connect();
const result = await client.query('SELECT * FROM users;');
console.log(result);
await client.end()
}

test();