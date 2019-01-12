import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button,
} from './common';

import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
  }

  onEmailChanged(text) {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onPasswordChanged(text) {
    const { passwordChanged } = this.props;
    passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChanged}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChanged}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
