import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import fooditems from './components/Fooditems'

function App() {
  let fooditems = ["dal" , "green veg", "roti", "milk", "ghee"];
 
  return (
    <>
    <h1>Healthy food</h1>
    <fooditems></fooditems>
    </>
    
  );
}

export default App;
