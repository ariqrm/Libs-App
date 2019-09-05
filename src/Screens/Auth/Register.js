import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Form, Input, Content, Button} from 'native-base';

const GRAY = '#6969697a';
const LIGHT_GRAY = '#D3D3D3';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }
  handleFocus = event => {
    this.setState({
      isFocused: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  handleBlur = event => {
    this.setState({
      isFocused: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };
  render() {
    const {isFocused} = this.state;
    const {onFocus, onBlur, ...otherProps} = this.props;
    return (
      <Content style={style.root}>
        <Text style={style.welcomeText}>Here Top</Text>
        <Form>
          <Input
            placeholder="Username"
            selectionColor={GRAY}
            underlineColorAndroid={isFocused ? GRAY : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={style.inputAuth}
            {...otherProps}
          />
          <Input
            placeholder="Full name"
            selectionColor={GRAY}
            underlineColorAndroid={isFocused ? GRAY : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={style.inputAuth}
            {...otherProps}
          />
          <Input
            placeholder="Email"
            selectionColor={GRAY}
            underlineColorAndroid={isFocused ? GRAY : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            textContentType="emailAddress"
            style={style.inputAuth}
            {...otherProps}
          />
          <Input
            placeholder="Password"
            selectionColor={GRAY}
            underlineColorAndroid={isFocused ? GRAY : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            textContentType="emailAddress"
            style={style.inputAuth}
            {...otherProps}
            secureTextEntry={true}
          />
          <Button style={style.buttons} transparent light>
            <Text style={style.buttonsText}>Sign Up</Text>
          </Button>
        </Form>
        <Button
          style={style.buttons}
          transparent
          light
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={style.buttonsText}>Sign In</Text>
        </Button>
      </Content>
    );
  }
}
const style = StyleSheet.create({
  inputAuth: {
    paddingLeft: 6,
    width: '88%',
    marginTop: 10,
    marginBottom: 10,
  },
  root: {
    marginLeft: 30,
  },
  welcomeText: {
    fontFamily: 'Airbnb Cereal App',
    marginTop: 70,
    fontSize: 34,
    flex: 1,
  },
  buttons: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    maxWidth: 80,
  },
  buttonsText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
