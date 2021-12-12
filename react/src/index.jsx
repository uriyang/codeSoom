import React from 'react';
import ReactDOM from 'react-dom';

const Button = function ({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
};

const Buttons = function () {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button>{i}</Button>
      ))}
    </p>
  );
};

const App = function () {
  return (
    <div>
      <p>Hello, world!</p>
      <p>Hi!</p>
      <Buttons />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
