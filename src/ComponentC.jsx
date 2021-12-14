import React from 'react'
import {FirstName,LastName} from './App';
import './App.css';


function ComponentC() {
    return (
        <>
        <h1 className='CC'>This is in Component C</h1>
        <FirstName.Consumer>
            {
                (fname)=>{
                    return(
                        <LastName.Consumer>
                            {
                                (lname)=>{
                                    return(
                                        <h1>My Name is {fname} {lname}</h1>
                                    )
                                }
                            }
                        </LastName.Consumer>
                    )
                }
            }
        </FirstName.Consumer>
        </>
    )
}
export default ComponentC
