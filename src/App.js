// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './features/products/ProductList';
import UsersList from './features/users/UsersList';
import LoadingComponent from './features/LoadingComponent';
import UserDetails from './features/users/UserDetails';
import ParentComponent from './app/child-to-parent-data-transfer/ParentComponent';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>React Data Flow Example</h1>
        </header>
        
        <ParentComponent />
        <h1 className="App-header">Welcome to User List App</h1>
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/" element={
            <div>
              <h2>Home Page</h2>
              <p>Welcome to the user management app. Navigate to the <a href="/users">user list</a>.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
