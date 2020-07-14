import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Input from "../Inputs/Input";
import { Typography, Button } from "antd";
import "./index.css";

const { Title } = Typography;
const SignUpComponent = (props) => {
  const { defaultValue, onSubmit } = props;

  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
    bio: "",
  });

  const handleOnChange = (e, key) => {
    setState({ ...state, [key]: e.target.value });
  };

  const handleOnSubmit = () => {
    onSubmit(state);
  };

  useMemo(() => {
    if (defaultValue) setState({ ...state, ...defaultValue });
  }, [defaultValue]);

  const { username, password, email, fullName, bio } = state;

  return (
    <div className="signup">
      <Title>Sign up</Title>
      <div className="group">
        <Input
          label="Username"
          required
          value={username}
          onChange={(e) => handleOnChange(e, "username")}
        />
        <Input
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => handleOnChange(e, "password")}
        />
        <Input
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => handleOnChange(e, "email")}
        />
        <Input
          label="Full Name"
          value={fullName}
          onChange={(e) => handleOnChange(e, "fullName")}
        />
        <Input
          label="Bio"
          value={bio}
          onChange={(e) => handleOnChange(e, "bio")}
        />
      </div>
      <div className="group">
        <Button type="primary" onClick={handleOnSubmit}>
          Sign up
        </Button>
      </div>
      <span>
        Already has an account ?<Button type="link">Sign in now</Button>
      </span>
    </div>
  );
};

SignUpComponent.propTypes = {
  defaultValue: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
    bio: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

SignUpComponent.defaultValue = {
  defaultValue: {
    username: "",
    password: "",
    email: "",
    fullName: "",
    bio: "",
  },
};

export default SignUpComponent;
