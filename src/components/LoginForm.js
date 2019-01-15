import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import {
  Card, CardSection, Input, Button, Spinner,
} from './common';


import { emailChanged, passwordChanged, loginUser } from '../actions';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChanged(text) {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onPasswordChanged(text) {
    const { passwordChanged } = this.props;
    passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, loginUser } = this.props;
    loginUser({ email, password });
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {error}
          </Text>
        </View>
      );
    }
    return <View />;
  }

  renderButton() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
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

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
