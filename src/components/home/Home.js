import React from 'react'
import Header from '../header/Header'
import InputFld from '../input/InputFld';
import CardsAr from '../cardsAr/CardsAr'
export default function Home() {
    return (
        <div className='Home' >
            <Header />
            <InputFld />
            <CardsAr />
        </div>
    )
}
