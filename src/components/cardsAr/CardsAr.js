    import React from 'react'
import useFirestore from '../../Firestore/useFirestore'
import Card from '../card/Card'
    import './CardsAr.css'
    export default function CardsAr() {
        const {items} = useFirestore()
        
     console.log(items)
        return (
            <div>
                 <div className="container__card__arr">
                 <section className="card__ar">
                 {
                    items.map(item => <Card item ={item} id={item.id} title={item.title} amount={item.amount}
                    type ={item.Type} date={item.date}
                    key={item.id} /> )
                 }
                  
                 </section>
                 </div>
            </div>
        )
    }
    