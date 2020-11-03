import React, { Component } from "react";

export default class User extends Component {
  render() {
    let first_name = this.props.rows[0].first_name;
    let tasks = this.props.rows;

    let allTasks = tasks.map((item, index) => {
      return (
        <div>
          <input type="checkbox" key={index} />
          <label>{item.task}</label>
        </div>
      );
    });

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

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&family=Reenie+Beanie&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="/css/user.css" />
        </head>
        <body>
          <div>
            <form method="POST" action="/">
              <button id="logout" className="btn btn-outline-dark btn-sm">
                LOG OUT
              </button>
            </form>

            <div id="content">
              <h1>{first_name}'S LIST</h1>

              <form method="POST" action="/user/:username">
                <input type="text" name="task" required />
                <button className="btn btn-outline-light btn-sm">+</button>
              </form>
              {allTasks}
            </div>
          </div>
        </body>
      </html>
    );
  }
}
