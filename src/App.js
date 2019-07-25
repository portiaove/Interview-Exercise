import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import PhoneList from './components/PhoneList'
import PhoneDetail from './components/PhoneDetail'

function App() {
  return (
    <div className="App">
      <Switch>
        < Route exact path='/' component={PhoneList} />
        < Route exact path='/:id' component={PhoneDetail} />
      </Switch>
    </div>
  );
}

export default App;
