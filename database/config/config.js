module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "numpy_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // Config para Mac
    "dialectOptions": {
      "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
      }
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "numpy_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "numpy_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
