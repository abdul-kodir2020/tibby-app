import React,{ useMemo, useState } from 'react';
import './App.css';
import { ShowModalContext } from './Context';
import Button from './components/Button';
import Popup from './components/Popup';

function App() {
  const [showPopup, setShowpup] = useState(false);
  const value = useMemo(()=>({showPopup, setShowpup}),[showPopup])

  return (
    <div className="App">
      <ShowModalContext.Provider value={value}>
        <Button img="star"></Button>
        <Button></Button>
        <Button></Button>
        <Button img="cash"></Button>
        {
          (showPopup?<Popup></Popup>:null)
        }
      </ShowModalContext.Provider>
    </div>
  );
}

export default App;
