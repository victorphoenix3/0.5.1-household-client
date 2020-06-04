import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import  HTTPClient  from '../../../src/HTTPClient';

import './login.css';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username:'',
      password:'',
      login:false
    }
  }
  onFinish(values) {
    console.log('Received values of form: ', values);
  };

  handleClick(event) {
    if (this.state.username == '' || this.state.password == '') return;
    var payload = {
      "identifier": this.state.username,
      "password": this.state.password,
    }
    const client = new HTTPClient(process.env.REACT_APP_API_URL,{});

    client.post(process.env.REACT_APP_API_URL, payload).then(
      (response)=>{
          if (!response.success) {
            window.alert('Login Unsucessful!' + response.msg);
          } else {
            localStorage.setItem('login',JSON.stringify({
              login: true,
              token: response.data.token
            }))
            this.setState({login:true});
          }
        }
    );
  }
  render() {
    return (
      <Form
        name="normal_login"
        className="form-box"
        initialValues={{
          remember: true,
        }}
        onFinish={ this.onFinish }
      >
        <Form.Item className="input-field"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
            onChange = {(event) => this.setState({username:event.target.value})}/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange = {(event) => this.setState({password:event.target.value})}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button"
              onClick={(event) => this.handleClick(event)}>
              Log In
            </Button>
            <p><a href="./registration">Or Register Now!</a></p>
          </Form.Item>
        </Form.Item>
        {this.state.login === true &&
        <Redirect
          to={{
            pathname: "/houses/all",
          }}
        />
      }
      </Form>
    );
  }
};
