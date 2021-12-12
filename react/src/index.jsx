import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = function ({count, onClick}) {
  return (
    <button type="button" onClick={onClick}>
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
        <Button key={i}>{i}</Button>
      ))}
    </p>
  );
};

const App = function () {
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
    <div>
      <p>Hello, world!</p>
      <p>Hi!</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <Buttons />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
