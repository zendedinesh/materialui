import { Avatar, Grid, Paper, Typography, TextField, Button, FormControl, Radio, FormControlLabel, FormLabel, RadioGroup, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Signup = () => {
    const Signup = {
        padding: "30px 20px",
        width: "400px",
        margin: " 20px auto",
        backgroundColor: 'white',
        boxShadow:'0 0 0 5px green',
        opacity:'80%%'
    }
    const header = {
        margin: 0
    }
    const icon = {
        backgroundColor: "green"
    }

    const name = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px'


    }

  


    const usenavigate = useNavigate()
    const mypassword = () => {
        return (
            <InputAdornment position='end'>
                <IconButton><RemoveRedEyeIcon /></IconButton>
            </InputAdornment>)
    }
    const [userData, setUserdata] = useState({
        FIRSTNAME: '',
        MIDDLENAME: '',
        LASTNAME: '',
        PHONENUMBER: '',
        EMAIL: '',
        PASSWORD: '',
        CONFIRMPASSWORD: ''
    })
    const handelchange = ({ target: { label, value } }) => {
        let updatedata = { ...userData }
        updatedata[label] = value;
        setUserdata(updatedata)
    }
    const handelsubmit = (e) => {
        e.preventDefault()
        if (userData.PASSWORD == userData.CONFIRMPASSWORD) {
            alert("successflly registered")
            usenavigate('/login')
        } else {
            alert("password did not match")
        }

    }
    return (
        <div>

            <form onSubmit={handelsubmit}>
                <Grid>
                    <Paper elevation={20} style={Signup}>
                        <Grid align="center">
                            <Avatar style={icon}>
                            </Avatar>
                            <Typography variant='h5' style={header}>signup</Typography>
                            <Typography variant='h6'> please fill this form to create an a account</Typography>
                        </Grid>
                        <Grid style={name}>

                            <TextField  onChange={handelchange} type='text' fullWidth label="FIRSTNAME" placeholder='ENTER YOUR NAME' style={{ marginBottom: '15px', marginTop: '5px' }}></TextField>
                            <TextField onChange={handelchange} type='text' fullWidth label="MIDDLENAME" placeholder='ENTER YOUR MIDDEL NAME' style={{ marginBottom: '15px' }}></TextField>
                            <TextField onChange={handelchange} type='text' fullWidth label="LASTNAME" placeholder='ENTER YOUR LAST NAME' style={{ marginBottom: '15px' }}></TextField>
                        </Grid>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup style={{ display: 'initial' }}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <Grid>
                            <TextField onChange={handelchange} type='number'  fullWidth label="PHONENUMBER" placeholder='ENTER YOUR PHONE NUMBER' style={{ marginBottom: '15px' }}></TextField>
                            <TextField onChange={handelchange} type='email' fullWidth label="EMAIL" placeholder='ENTER YOUR EMAIL' style={{ marginBottom: '15px' }}></TextField>
                            <TextField onChange={handelchange} type='password' fullWidth label="PASSWORD" placeholder='ENTER YOUR PASSWORD' style={{ marginBottom: '15px' }} inputProps={{ endAdorment: <mypassword /> }} ></TextField>
                            <TextField onChange={handelchange} type='password' fullWidth label="CONFIRMPASSWORD" placeholder='ENTER YOUR CONFIRMPASSWORD' style={{ marginBottom: '15px' }}></TextField>
                        </Grid>
                    <Button type="submit" varient="h4" style={{ backgroundColor: 'lightblue', color: 'black', width: '300'}} >sign up</Button>

                    </Paper>
                </Grid>
            </form>
        </div>
    )
}

export default Signup
