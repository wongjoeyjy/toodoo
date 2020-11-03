import React, { Component } from "react";

class Home extends Component {
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

          <link rel="stylesheet" href="/css/home.css" />
        </head>

        <body>
          <div>
            <h1>TOODOO</h1>

            <form method="GET" action="/login">
              <button className="btn btn-light">LOG IN</button>
            </form>

            <form method="GET" action="/register">
              <button className="btn btn-light">REGISTER</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

export default Home;
