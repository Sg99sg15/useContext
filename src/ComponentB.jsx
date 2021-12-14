import React, { useContext} from 'react';
import ComponentC from './ComponentC';
import {FirstName,LastName} from './App';
import './App.css';




function ComponentB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
        <ComponentC />

        <hr />
        <hr />

        <h1 className='CB'>This is in Component B</h1>
        <h1>My Name is {fname} {lname}</h1>
        </>
    )
}
export default ComponentB;
