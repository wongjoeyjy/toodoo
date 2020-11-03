import React, { Component } from "react";

class Register extends Component {
  render() {
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

          <link rel="stylesheet" href="/css/register.css" />
        </head>

        <body>
          <div>
            <h1>Registration</h1>

            <form method="POST" action="/new_user">
              First Name: <input type="text" name="first_name" required />
              <br />
              Last Name: <input type="text" name="last_name" required />
              <br />
              Username: <input type="text" name="username" required />
              <br />
              Password: <input type="password" name="password" required />
              <br />
              <button className="btn btn-light">register</button>
              <button type="reset" className="btn btn-light">
                reset
              </button>
            </form>

            <h4>
              <a href="https://toodoo-todolist.herokuapp.com/login">
                Already have an account?
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

export default Register;
