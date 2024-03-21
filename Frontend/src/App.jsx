import { useState } from 'react'
import Appbar from './components/Appbar';
//import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
        <div>
          <div className="Appbar-container">
            <Appbar/>
          </div>

          <div className="Body-container">
            <div className='LeftSideBar-container'>
              <div>sgsvdv</div>
              <div>svsdvsgr</div>
            </div>
            <div className='Center-container'></div>
            <div className='RightSideBar-container'></div>
            
          </div>
        </div>
       
    
  );
}

export default App