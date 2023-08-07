
import { useState } from 'react';
import userService from '../../utils/userService'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link, useNavigate } from 'react-router-dom';


import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
} from "semantic-ui-react";


export default function SignUpPage({ handleSignUpOrLogin }) {
	const [state, setState] = useState({
		username: '',
		email: '',
		password: '',
		passwordConf: ''
	});

	const [selectedFile, setSelectedFile] = useState('');

	const [error, setError] = useState('');
	const navigate = useNavigate();

	

	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

	function handleFileInput(e) {
		setSelectedFile(e.target.files[0])
	}


	async function handleSubmit(e) {
		e.preventDefault();
		// Handle form submission 
		const formData = new FormData();
		formData.append('photo', selectedFile)
		formData.append('username', state.username)
		formData.append('email', state.email)
		formData.append('password', state.password)

		try {
			const signUp = await userService.signup(formData)
			console.log(signUp)
			navigate('/');
			handleSignUpOrLogin();
		} catch (err) {
			console.log(err, 'err in handleSubmit');
			setError('something went wrong')
		}

	}

	return (
		<Grid textAlign='center' style={{ height: "100vh" }}>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="orange" textAlign="center">
					<Image src="https://i.imgur.com/5hRgcgN.jpg" /> Sign Up
				</Header>
				<Form onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							name="username"
							placeholder="username"
							value={state.username}
							onChange={handleChange}
							required
						/>
						<Form.Input
							name="email"
							type="email"
							placeholder="email"
							value={state.email}
							onChange={handleChange}
							required
						/>
						<Form.Input
							name="password"
							type="password"
							placeholder="password"
							value={state.password}
							onChange={handleChange}
							required
						/>
						<Form.Input
							name="passwordConf"
							type="password"
							placeholder="Confirm Password"
							value={state.passwordConf}
							onChange={handleChange}
							required
						/>
						<Form.Field>
							<Form.Input
								type="file"
								name="photo"
								placeholder="upload image"
								onChange={handleFileInput}
							/>
						</Form.Field>

						<Button type="submit" className="button">
							Sign Up
						</Button>
					</Segment>
					<Message>You already have an account? <Link to="/login">Login</Link></Message>

					{error ? <ErrorMessage error={error} /> : null}
				</Form>
			</Grid.Column>
		</Grid>
	);
}
