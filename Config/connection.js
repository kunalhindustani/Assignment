const mysql = require('mysql');
var mysqlPool;
//This function create the connection of mysql and assign in the variable.
function handleMasterDisconnect() {
  mysqlPool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASENAME
  });
  mysqlPool.on('enqueue', function(){console.log('handleMasterDisconnect conn queued')});
	mysqlPool.on('dequeue', function(){console.log('handleMasterDisconnect conn dequeued')});
}
//This function is declare global and execute the query.
global.executePromisified = function(statement, parameter) {
  return new Promise((resolve, reject) => {
    mysqlPool.query(statement, parameter, (error, queryResult) => {
        if(error) {
          return reject(error);
        }
        return resolve(queryResult);
    });
  });
}

handleMasterDisconnect();
