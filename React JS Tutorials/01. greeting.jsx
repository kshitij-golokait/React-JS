import React from 'react';

function Greeting() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1>Hello, World!</h1>
      <p>Welcome to React!</p>
      <p>This is a basic functional component.</p>
      <p>It returns a JSX structure to be rendered.</p>
      <ul>
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>It is maintained by Facebook and a community of individual developers and companies.</li>
        <li>React can be used as a base in the development of single-page or mobile applications.</li>
      </ul>
      <footer>
        <p>Happy Coding!</p>
      </footer>
    </div>
  );
}

export default Greeting;
