import React, { Component } from "react";

export class NewUser extends Component {
  render() {
    // let first_name = this.props.rows[0].first_name;

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

          <link rel="stylesheet" href="/css/new_user.css" />
        </head>

        <body>
          <div>
            <form method="POST" action="/">
              <button id="logout" className="btn btn-outline-dark btn-sm">
                log out
              </button>
            </form>
            <div id="content">
              <h1>WELCOME TO TOODOO</h1>
              <h2>Let's get you started by keying in your first task!</h2>

              <form method="POST" action="/user/:username">
                <input type="text" name="task" required />
                <button className="btn btn-outline-light btn-sm">+</button>
              </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default NewUser;
