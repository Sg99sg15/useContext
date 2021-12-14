import React from 'react';
import ComponentB from './ComponentB';
import './App.css';

function ComponentA() {
    return (
        <>
        <ComponentB />

        <hr />
        <hr />

        <h1 className='CA'>This is in Component A</h1>
        </>
    )
}
export default ComponentA;
