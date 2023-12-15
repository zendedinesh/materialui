import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography, } from '@mui/material';
import { Form, useNavigate } from 'react-router-dom';
const Login = () => {
    const login = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: "auto"

    }
    const dinesh = {
        padding: "30px 20px",
        width: '400px',
        margin: '20px auto',
        border:'2px solid black'

    }
    const tag = {
        margin: 'auto',
        backgroundColor: 'green'
    }
  
    const myusenavigate = useNavigate()
    const [data, setData] = useState({
        EMAIL: '',
        PASSWORD: ''
    })
    const myhandelchange = ({ target: { label, value } }) => {
        const myupdatedata = { ...data }
        myupdatedata[label] = value
        setData(myupdatedata)

    }
    const loginsubmit=(e)=>{
        e.preventDefault()
        alert("successfully login ")
        myusenavigate('/signup')
    }
    return (
        <div>
            <form onSubmit={loginsubmit} >
                <Paper style={dinesh}>
                    <Avatar style={tag}>

                    </Avatar>
                    <Typography varient='h1' >LOGIN PAGE</Typography>
                    <Grid style={login}>
                        <TextField onChange={myhandelchange} type='email' label="EMAIL" style={{ marginBottom: '15px', marginTop: '10px' }} ></TextField>
                        <TextField onChange={myhandelchange} type='password' label="PASSWORD" style={{ marginBottom: '15px', marginTop: '10px' }}></TextField>
                        <Button type='submit' variant='h4' style={{ color: 'black', backgroundColor: 'green' }}  > submit</Button>
                    </Grid>
                </Paper>
            </form>
        </div>
    )
}

export default Login
