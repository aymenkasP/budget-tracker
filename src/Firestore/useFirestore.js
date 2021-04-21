import { useState, useEffect } from 'react';
import { db } from './Firestore';



export default function useFirestore() {
    const [items, setItems] = useState([]);
  

    useEffect(()=>{
    const unsubscribe  = db.collection('list').orderBy('date').onSnapshot(snapshot => {
            const fetched = snapshot.docs.map(doc => {
              return {
                ...doc.data(),
                id: doc.id
              }
            }
               
            )
           
            setItems(fetched)
            
      
      
          })

         
      
     

    return unsubscribe
    },[])

    const deleteItem = async (id) => {
        await db.collection('list').doc(id).delete();
      };

    const addItem = async (item) => {
        await db.collection('list').add({
          ...item
        })
    } 
   

    return {addItem , items ,deleteItem}
}
