module.exports = (app, allModels) => {
  const usersControllerCallback = require("./controllers/users_controller")(
    allModels
  );

  app.get("/", usersControllerCallback.homepage);
  app.post("/", usersControllerCallback.logout);
  app.get("/register", usersControllerCallback.register);
  app.post("/new_user", usersControllerCallback.newUser);
  app.get("/login", usersControllerCallback.login);
  app.post("/user", usersControllerCallback.verifyInfo);

  const todolistControllerCallback = require("./controllers/todolist_controller")(
    allModels
  );

  app.get("/user/:username", todolistControllerCallback.userTasks);
  app.post("/user/:username", todolistControllerCallback.addTask);
};
