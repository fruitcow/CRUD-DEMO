# CRUD-DEMO
a crud demo build with vue.js and express
## Online Demo
[Demo](https://express-crud-demo.herokuapp.com/)

## Build Setup

``` bash
### install dependencies
npm install

## run on localhost:3000
npm start
```
### database Setup
run init.sql in ./db & change db setting in db.js

db.js
```javascript
  var db  = mysql.createPool({
    user: 'user',
    password: 'xxx',
    host: 'localhost',
    database: 'demo', 
    waitForConnections : true, 
    connectionLimit : 10       
});

```
