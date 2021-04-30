import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFirestore from '../../Firestore/useFirestore'
import './Header.css'
export default function Header() {
    const {items,logout} = useFirestore()
    const [expense ,  setExpense]= useState()
    const [income ,  setIncome]= useState()

    const Total = income - expense


   
    
        useEffect(()=>{
      const filterIncome =   items.filter(item => { return item.Type === 'income' } )
      const filterExpense =   items.filter(item =>  item.Type === "expanse" )
     
    setIncome(filterIncome.map(item => item.amount).reduce((cv,pv)=>  Number(cv) + Number(pv) , 0 ))
    setExpense(filterExpense.map(item => item.amount).reduce((cv,pv)=>  Number(cv) + Number(pv) , 0 ))
        },[items])
    return (
        <div>
            <header className="header">
                <nav className="nav" >
                    <div className="logo">
                        <p>Logo</p>
                    </div>
                    <div className="items" >
                        <div className="container">
                            <p className="item income"> {income}$</p>
                            <p className="item expanse"> {expense}$</p>
                            <p className="item total"> {Total}$ </p>

                            <p 
                                onClick={()=> logout}>
                                <Link className="item total" to='/login'>
                                    Logout
                                </Link>
                            </p>
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}
