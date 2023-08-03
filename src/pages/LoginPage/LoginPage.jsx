import React from 'react';
import './LoginPage.css';
import {useState} from 'react'
import userService from "../../utils/userService";
import { Link, useNavigate} from 'react-router-dom'


import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";


export default function LoginPage(props){
   const [state, setState] = useState({
    email: '',
    password: ''
   })

   const [error, setError] = useState('')

   const navigate = useNavigate();
   async function handleSubmit(e){
    e.preventDefault();

    try {
      await userService.login(state)
      navigate('/')
      handleSignUpOrLogin();
    } catch(err){
      console.log(err)
      setError('Something went wrong')
    }
   }

   function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
   }




    return (
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="orange" textAlign='center'>
        <Image src="https://i.imgur.com/Mm5Fruh.png" alt="Logo" /> Login
      </Header>
   

      <Form onSubmit={handleSubmit}>
      <Segment stacked>

      <Form.Input
        type="email"
        name="email"
        placeholder="email"
        value={state.email}
        onChange={handleChange}
        required />
        
        <Form.Input
        type="password"
        name="password"
        placeholder="password"
        value={state.password}
        onChange={handleChange}
        required
         />
        
        <Button type="submit" className="btn">
          Login
        </Button>
      </Segment>
      <Message>You don't have an account? <Link to="/signup">Sign Up</Link></Message>
        {error ? <ErrorMessage error={error} /> : null}
        </Form>
        </Grid.Column>
        </Grid>
        
      
);
}

