module.exports = (dbPoolInstance) => {
  let getUserTasks = (id, callback) => {
    let text = `SELECT users.*, todolist.*  FROM users JOIN todolist ON users.id = todolist.user_id WHERE user_id = '${id}'`;

    dbPoolInstance.query(text, (err, result) => {
      if (err) {
        console.log("error at todolist_model, getUserTasks ---", err.message);
        callback(null, null);
      } else {
        callback(null, result);
      }
    });
  };

  let getAddTask = (user_id, task, callback) => {
    let text = `INSERT INTO todolist (task, completed, user_id) VALUES ('${task}', 'false', '${user_id}') RETURNING *`;

    dbPoolInstance.query(text, (err, result) => {
      if (err) {
        console.log("error at todolist_model, getAddTask", err.message);
        callback(null, null);
      } else {
        callback(null, result);
      }
    });
  };

  return {
    getUserTasks,
    getAddTask,
  };
};
