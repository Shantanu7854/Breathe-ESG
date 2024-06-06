import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import '../styles/login.scss'; // Ensure you import the SCSS file
import logo from '../assets/logo.png';

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const App: React.FC = () => (
  <div className="login-container">
    <div className="left-content">
      <p>WELCOME TO</p>
      <div className="logo-container">
        <img src={logo} alt="Breathe ESG Logo" className="logo" />
        <h1 className="tagline">BREATHE ESG</h1>
      </div>
      <p className="description">We help you track your organization's metrics as per the ESG Guidelines</p>
      <a href="#">Get in touch!</a>
    </div>
    <div className="right-form">
      <div className="form-box">
        <h1 className="form-heading">SignUp</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form-item">
            <label>Email</label>
            <Input name="email" />
          </div>
          <div className="form-item">
            <label>Password</label>
            <Input.Password name="password" />
          </div>
          <div className="form-item">
            <label>Confirm Password</label>
            <Input.Password name="confirmPassword" />
          </div>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="button">
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);

export default App;
