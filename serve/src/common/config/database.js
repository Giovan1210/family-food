const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsdb',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '8.130.10.25',
    port: '3306',
    user: 'root13',
    password: 'root',
    dateStrings: true
};
