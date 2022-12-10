import React from 'react'
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,storage,db } from "../firebase"
import { useState } from 'react';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 



export default function Register(){
    const [err, setErr]= useState(false)
    const handleSubmit = async(e)=>{
           e.preventDefault()
           const displayName = e.target[0].value;
           const email = e.target[1].value;
           const password = e.target[2].value;
           const file = e.target[3].files[0];

           
        try{
           const res = await createUserWithEmailAndPassword(auth, email, password)
            
           
          
           const storageRef = ref(storage, displayName);
           
           const uploadTask = uploadBytesResumable(storageRef, file);
           
           // Register three observers:
           // 1. 'state_changed' observer, called any time the state changes
           // 2. Error observer, called on failure
           // 3. Completion observer, called on successful completion
           uploadTask.on(


             (error) => {
              setErr(true)
             }, 
             () => {
               getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                 await updateProfile(res.user,{
                    displayName,
                    photoURL:downloadURL
                 });
                 await setDoc(doc(db,"users",res.user.uid),{
                    uid:res.user.uid,
                    displayName,
                    email,
                    photoURL:downloadURL
                });
               });
             }
           );
        
        
        
        }catch(err){
                setErr(true)
            }



    }
  return (
    <div className='formcontainer'>
        <div className="formwrapper">
            <div className="logo">Random Chat</div>
            <div className="title">Register</div>
            <form onSubmit={handleSubmit}>
             <input type="text" placeholder='display name' />
             <input type="email" placeholder='email' />
             <input type="password" placeholder='Password' />
             <input  style = {{display:'none'}} type="file" id ='file' />
             <label htmlFor="file">
                <img src="https://cdn-icons-png.flaticon.com/512/4807/4807317.png" alt="" />
                <span>Add an avatar</span>
             </label>
              <button>Sign Up</button>
              {err && <span>Something Went wrong</span>}
      </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}


