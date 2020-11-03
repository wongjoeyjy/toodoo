module.exports = (db) => {
  let userTasks = (req, res) => {
    let id = req.cookies.user_id;

    db.todolist.getUserTasks(id, (err, result) => {
      if (err) {
        console.log("error at todolist_controller, userTasks ---", err.message);
      } else {
        if (result.rows.length === 0) {
          res.render("NewUser", result);
        } else {
          res.render("User", result);
        }
      }
    });
  };

  let addTask = (req, res) => {
    let username = req.cookies.username;
    let user_id = req.cookies.user_id;
    let task = req.body.task;

    db.todolist.getAddTask(user_id, task, (err, result) => {
      if (err) {
        console.log("error at todolist_controller, addTask ---", err.message);
      } else {
        res.redirect(`/user/${username}`);
      }
    });
  };

  return {
    userTasks,
    addTask,
  };
};
