import React, { createContext } from 'react'
import ComponentA from './ComponentA';
import './App.css';

const FirstName = createContext();
const LastName = createContext();


function App() {
  return (
    <>
    <div className='box'>
      <FirstName.Provider value={"Shashank"}>
      <LastName.Provider value={"Gupta"}>
      <ComponentA />
      </LastName.Provider>
      </FirstName.Provider>
      </div>
    </>
  );
}

export default App;
export {FirstName, LastName};