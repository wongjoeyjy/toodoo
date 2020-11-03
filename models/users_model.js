module.exports = (dbPoolInstance) => {
  let getNewUser = (first_name, last_name, username, password, callback) => {
    let text = `INSERT INTO users (first_name, last_name, username, password) VALUES (UPPER('${first_name}'), UPPER('${last_name}'), '${username}', '${password}') RETURNING *`;

    dbPoolInstance.query(text, (err, result) => {
      if (err) {
        console.log("error at users_model, getNewUser ---", err.message);
        callback(null, null);
      } else {
        callback(null, result);
      }
    });
  };

  let getVerifyInfo = (username, password, callback) => {
    let text = `SELECT * FROM users WHERE username = '${username}'`;

    dbPoolInstance.query(text, (err, result) => {
      if (err) {
        console.log("error at users_model, getVerifyInfo", err.message);
        callback(null, null);
      } else {
        if (result.rows.length > 0) {
          // hashing the password pulled from database
          // let pw = sha256(result.rows[0].password)

          if (`${password}` === result.rows[0].password) {
            callback(null, result);
          } else {
            callback(null, "wrong password");
          }
        } else {
          callback(null, "wrong username");
        }
      }
    });
  };

  return {
    getNewUser,
    getVerifyInfo,
  };
};
