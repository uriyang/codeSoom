import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = function () {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me!
      (
      { count }
      )
    </button>
  );
};

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
      <Counter />
      <Buttons />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
