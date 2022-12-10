import React from 'react'

export default function Login(){
  return (
    <div className='formcontainer'>
        <div className="formwrapper">
            <div className="logo">Random Chat</div>
            <div className="title">Login</div>
            <form >
             
             <input type="email" placeholder='email' />
             <input type="password" placeholder='Password' />
             
              <button>Sign in</button>
      </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}


