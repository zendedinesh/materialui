import React from 'react'
import '../style/Loginone.css'
import { useNavigate } from 'react-router-dom'
const Loginone = () => {
    const signup = () => {
        mynavigate('/signupone')
    }
    const mynavigate = useNavigate()
    return (
        <div>
            <div className='logindiv'>
                <h1>LOGIN PAGE</h1>
                <div className='login'>
                    <div className='dinesh'>
                        <label className='nameone'>EMAIL :
                        </label>
                        <input className='inputone' placeholder='ENTER YOUR EMAIL'></input>
                    </div>
                    <div className='dinesh'>
                        <label className='nameone' >PASSWORD:
                        </label>
                        <input className='inputone' placeholder='ENTER YOUR PASSWORD'></input>
                    </div>
                    <button className='bu'>LOGIN</button>
                    <p className='para' onClick={signup}>IF YOU DO NOT HAVE AN  ACOUNT ? CLICK HERE TO CREATE A ACCOUNT </p>
                </div>

            </div>
        </div>
    )
}

export default Loginone
