    import React from 'react'
import useFirestore from '../../Firestore/useFirestore'
import Card from '../card/Card'
    import './CardsAr.css'
    export default function CardsAr() {
        const {items} = useFirestore()
       return items ? (
            <div>
                 <div className="container__card__arr">
                 <section className="card__ar">
                 {
                    items.map((item )=> <Card key={item.title} item ={item}  title={item.title} amount={item.amount} type ={item.Type} date={item.date} /> )
                 }
                  
                 </section>
                 </div>
            </div>
        ): (
            <p>""</p>
        )
    }
    