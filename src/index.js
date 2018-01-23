import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
} from 'react-router-dom';
import Invoice from './Invoice';



ReactDOM.render(
  <Router>
  <Invoice />
  </Router>
   ,
 document.getElementById('root')
)
;
