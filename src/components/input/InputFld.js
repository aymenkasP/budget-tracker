import React from 'react'
import './input.css'
import { useForm } from "react-hook-form";
import useFirestore from '../../Firestore/useFirestore';

export default function InputFld() {
    const { register, handleSubmit} = useForm();
    
  
    const {addItem} =useFirestore()
   
   const onSubmit = data =>addItem(data) ;
    
 

   
    return (
        <div>
            <section className="input__sec">
            <div className="input__ar">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  className="respo" type="text" name="title" placeholder="title"  {...register("title")} />
            <input  className="amount respo" type="number" name="amount" placeholder="amount"  {...register("amount")} />
            <input  className='respo ' type="date" name="date"   {...register("date")}  />
            <select className="selecter respo" {...register("Type")} >
                <option value="income">income</option>
                <option value="expanse">expanse</option>
            </select>
            <input className="add__btn" type="submit" value="add" onClick={()=> {
                
               
            }} />
            </form>
            </div>
            </section>
        </div>
    )
}
