import React from 'react';
import Login from './login';
import Main from './main';
import Search from './search';
import Cloud from './cloud';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Login/>
        <div>
          <Main/>
          <Search/>
          <Cloud/>
        </div>
      </div>
    );
  }
});

export default App;
