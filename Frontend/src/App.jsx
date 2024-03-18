import { useState } from 'react'
import Appbar from './Components/Appbar';
import Sidebar from './Components/Sidebar';
import './App.css';

function App() {
  return (
        <div>
          <div className="Appbar-container">
            <Appbar/>
          </div>

          <div className="Body-container">
            <div className='Sidebar-container'>
              <Sidebar/>
            </div>

          </div>
        </div>
       
    
  );
}

export default App
