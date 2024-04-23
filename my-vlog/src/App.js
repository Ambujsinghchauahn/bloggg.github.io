import React from 'react';
import './App.css';
import {HashRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
