const pg = require("pg");

//require the url library
//this comes with node, so no need to yarn add
const url = require('url');

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    ssl: {
      rejectUnauthorized: false,
    },
  };

}else{

  //otherwise we are on the local network
  var configs = {
      user: 'wongjoey',
      host: '127.0.0.1',
      database: 'project2',
      port: 5432
  };
}

const pool = new pg.Pool(configs);

pool.on("error", function (err) {
    console.log("idle client error", err.message, err.stack);
});

const usersModelsFunction = require("./models/users_model");
const todolistModelsFunction = require("./models/todolist_model");

const poolUsersModelsObject = usersModelsFunction(pool);
const poolTodolistModelsObject = todolistModelsFunction(pool);

module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool,

    /*
     * ADD APP MODELS HERE
     */

    users: poolUsersModelsObject,
    todolist: poolTodolistModelsObject,
};
