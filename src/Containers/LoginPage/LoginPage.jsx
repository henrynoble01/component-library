import React, { useContext, useState } from "react";
import { Button, Checkbox, Form, Input, Header } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./LoginPage.module.css";

import { AuthContext } from "../../App";

const LoginPage = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className='content'>
      <Header as='h1' color='teal'>
        Cad Consulting Limited
      </Header>
      <LoginArea dispatch={dispatch} />
      <Header size='tiny' color='teal' className='footer'>
        2017 - {new Date().getFullYear()}
        <span dangerouslySetInnerHTML={{ __html: " &copy " }} />
        Eletronic co-operative savings services 3.0
      </Header>
    </div>
  );
};

const initialState = {
  email: "",
  username: "",
  password: "",
  isSubmitting: false,
  errorMessage: null,
};

const LoginArea = ({ dispatch }) => {
  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    dispatch({
      type: "LOGIN",
      payload: data,
    });
  };

  return (
    <div className='login-area'>
      <h5>Login to your account</h5>
      <Form size='large' onSubmit={handleFormSubmit}>
        <Form.Field
          required
          id='email'
          control={Input}
          label='email'
          type='email'
          placeholder='Email'
          icon='user'
          fluid
          iconPosition='left'
          onChange={handleInputChange}
          value={data.email}
        />
        <Form.Field
          required
          id='password'
          control={Input}
          type='password'
          label='password'
          placeholder='Password'
          icon='lock'
          iconPosition='left'
          onChange={handleInputChange}
          value={data.password}
        />
        <Form.Group className='form-extra'>
          <Form.Field>
            <Checkbox label='Remember Me?' />
          </Form.Field>
          <Button type='submit' color='teal'>
            Login
          </Button>
        </Form.Group>
      </Form>

      <div className='extra-details'>
        <div className='social-icons'>
          <h6>or login with</h6>
          <div className='brand-icons'>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className='hover:text-blue-500 '
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className='hover:text-blue-700'
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className='hover:text-blue-300'
            />
          </div>
        </div>
        <div className='forgot-password'>
          <h6>Forgot Your Password ? </h6>
          <p>no worries, click here to reset your password</p>
        </div>
        <div className='sign-up'>
          <p>Dont Have an account yet ? Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
