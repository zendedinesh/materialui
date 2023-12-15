import React from 'react'
import '../style/Signupone.css'
import { useNavigate } from 'react-router-dom'
const Signupone = () => {
  const click = () => {
    navgate('/loginone')
  }
  const navgate = useNavigate()
  return (
    <div className='main'>
      <div>
        <h1>REGISTRATION FORM</h1>
        <div className='reg'>
          <div className='hello' >
            <label className='name'> FIRST NAME: </label><input placeholder='ENTER YOUR FIRST NAME' className='input'></input>
          </div>
          <div className='hello'>
            <label className='name' > MIDDEL NAME:</label> <input placeholder='ENTER YOUR MIDDEL NAME' className='input'></input>
          </div>
          <div className='hello'>
            <label className='name'>LAST NAME:</label> <input placeholder='ENTER YOUR LAST NAME' className='input'></input>
          </div>
          <span className='name'>ROLL :
            <select className='inputone'>
              <option>USER</option>
              <option>ADMIN</option>
            </select></span>
          <div className='hello'>
            <label className='name'> PHONENUMBER:</label> <input placeholder='ENTER YOUR PHONENUMBER' className='inputpho'></input>
          </div>
          <div className='hello'>
            <label className='name'>EMAIL: </label><input placeholder='ENTER YOUR EMAIL' className='input'></input>
          </div>
          <div className='hello'>
            <label className='name'>PASSWORD:</label> <input placeholder='ENTER YOUR PASSWORD' className='input'></input>
          </div>
          <div className='hello'>
            <label className='name'>CONFIRM PASSWORD:</label> <input placeholder='ENTER YOUR CONFIRM PASSWORD' className='inputpass'></input>
          </div>
          <button className='button'>REGISTER</button>
          <p className='para' onClick={click}>ALLREADY HAVE AN ACCOUNT ? CLICK HERE TO LOGIN</p>
        </div>
      </div>
    </div>
  )
}

export default Signupone
