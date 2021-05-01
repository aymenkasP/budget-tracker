import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { db , FieldValue , auth} from './Firestore';



export default function useFirestore() {
  const [items, setItems] = useState([]);
const {user} = useContext(AuthContext)

  useEffect(()=>{

    async function data(){
      const  unsubscribe  =  await db.collection('users').where('userId','==' ,user.uid).get()
      const [id]= unsubscribe.docs.map(item => item.id)

    const data =  db.collection('users').doc(id).onSnapshot(doc => {
    const itm = doc.data().data
    setItems(itm)}) 
  return data
    }
    
   return data()
  },[user.uid])
 
  
     async  function deleteItem  (Data,userId) {
      const res =   await db.collection('users').where('userId','==' ,userId).get()
      const [id]=  res.docs.map(item => item.id)

      const  Delete =  db.collection('users').doc(id)
      .update({
        data : FieldValue.firestore.FieldValue.arrayRemove(Data)
 
      })
      return  Delete
      };

    const addItem = async (userId,Data) => {
     
     const res =   await db.collection('users').where('userId','==' ,userId).get()
      const [id]= res.docs.map(item => item.id)

      const add =  db.collection('users').doc(id)
      .update({
        data : FieldValue.firestore.FieldValue.arrayUnion(Data)
 
      })
      return add
     
    }


    const logout = ()=> {
     
        auth.signOut()
        localStorage.removeItem('authUser')
      
    } 

    return {addItem , items ,deleteItem,logout}
}
