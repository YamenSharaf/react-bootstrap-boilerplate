import * as React from 'react';
import 'sass/example.scss';
class Home extends React.Component {
  render() {
    return (
      <main role="main" class="container mt-5">
        <h1 class="mt-5">React/React-router with Bootstrap boilerplate</h1>
        <p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
        <p>Back to <a href="javascript;">the default sticky footer</a> minus the navbar.</p>
      </main>
    );
  }
}

export default Home;
