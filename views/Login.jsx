import React, { Component } from "react";

class Login extends Component {
  render() {
    let error = this.props[0];

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />

          <link rel="stylesheet" href="/css/login.css" />
        </head>

        <body>
          <div>
            <h1>WELCOME</h1>

            <form method="POST" action="/user">
              Username: <input type="text" name="username" />
              <br />
              Password: <input type="password" name="password" />
              <br />
              <button className="btn btn-light">LOG IN</button>
            </form>
            {/* <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form> */}

            <div>
              <br />
              {error}
            </div>

            <h4>
              <a href="https://toodoo-todolist.herokuapp.com/register">
                Don't have an account yet?
              </a>
            </h4>
            <h4>
              <a href="/">Home</a>
            </h4>
          </div>
        </body>
      </html>
    );
  }
}

export default Login;
