import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import useFirestore from '../../Firestore/useFirestore'
import './card.css'
export default function Card({date ,amount , type, title  ,item }) {
    
    const {deleteItem} = useFirestore()
    const {user} = useContext(AuthContext)

   

    return (
        <div>
             <div className="card">
                        <div className="card__body">
                            <div className="card__title">
                                <p> {title} </p>
                            </div>
                            <div className= {`card__amount ${type === 'income'? 'incomeColor' : 'expenseColor' } ` } >
                                <p> {amount} $</p>
                            </div>
                            <div className="card__date">
                                 <p> {date} </p> 
                            </div>
                            <div className="card__selected">
                                   <p> {type} </p>  
                            </div>
                            <div className="card__delete__btn">
                                <button className="delete__btn" 
                                onClick ={()=> deleteItem(item ,user.uid)}
                                 >
                                    delete
                                </button>
                            </div>
                        </div>
                </div>
        </div>
    )
}
