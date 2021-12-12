import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
