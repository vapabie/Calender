import { useState } from 'react';
import Appbar from './components/Appbar';
import CalenderTable from './components/CalenderTable';
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
              <div className='MiniCalender-container'>

              </div>
              <div className='Preview-container'>
                
              </div>
            </div>
            <div className='Center-container'>
              <CalenderTable/>
            </div>
            <div className='RightSideBar-container'></div>
            
          </div>
        </div>
       
    
  );
}

export default App