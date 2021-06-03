import React from 'react';
import ReactDOM from 'react-dom';

const element2 = <div><h1 className= "my title">Hello JSX</h1></div>

const element = React.createElement("div", null, React.createElement("h1", {
  className: "my title"
}, "hello world"))
ReactDOM.render(element2,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);