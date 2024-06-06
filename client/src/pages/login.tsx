import React from 'react';
import { Button, Form, Input } from 'antd';
import { auth, provider } from '../firebase/firebase';  // import Firebase configuration
import { signInWithPopup } from "firebase/auth";
import '../styles/login.scss'; 
import logo from '../assets/logo.png';

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish = (values: FieldType) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Google Sign-In Success:', result.user);
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
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
        <h1 className="form-heading">Login</h1>
        <p>Enter your registered Email-Id to continue</p>
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
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="button">
              Continue
            </Button>
          </Form.Item>
        </Form>
        <Button type="primary" className="google-signin" onClick={handleGoogleSignIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  </div>
);

export default App;
