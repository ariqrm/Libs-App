import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Form, Input, Content, Button} from 'native-base';
import {connect} from 'react-redux';
import {signIn, signUp} from '../../Publics/Actions/Users';
import AsyncStorage from '@react-native-community/async-storage';

const GRAY = '#6969697a';
const LIGHT_GRAY = '#D3D3D3';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      data: [],
      user: [],
      formData: {
        username: '',
        full_name: '',
        email: '',
        password: '',
      },
      token: '',
      Response: false,
      isUpdateData: false,
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
  handleLogin = (name, text) => {
    const newFormData = {
      ...this.state.formData,
    };
    newFormData[name] = text;
    this.setState({
      formData: newFormData,
    });
    console.log(this.state.formData);
  };
  handleSubmit = () => {
    const dataUser = this.state.formData;
    this.props.SignUp(dataUser).then(res => {
      const data = res.action.payload.data;
      if (data.success) {
        this.props
          .SignIn(dataUser)
          .then(resSignin => {
            const DASI = resSignin.action.payload.data;
            if (DASI.success) {
              AsyncStorage.setItem('@storage_Key', DASI.data.token);
              this.props.navigation.navigate('Home');
              console.log(DASI);
            } else {
              this.setState({
                data: DASI,
                Response: true,
              });
              alert('wrong input');
              console.log(DASI);
            }
          })
          .catch(err => alert('wrong input'));
      }
    });
  };
  handleDataAuth = () => {
    AsyncStorage.getItem('@storage_Key', (err, res) => {
      if (res !== null) {
        this.props.navigation.navigate('Home');
        // value previously stored
      }
    });
  };
  render() {
    this.handleDataAuth();
    const {isFocused} = this.state;
    const {onFocus, onBlur, ...otherProps} = this.props;
    return (
      <Content style={style.root}>
        <Text style={style.welcomeText}>Here Top</Text>
        <Form>
          <Input
            onChangeText={text => this.handleLogin('username', text)}
            placeholder="Username"
            selectionColor={GRAY}
            underlineColorAndroid={isFocused ? GRAY : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={style.inputAuth}
            {...otherProps}
          />
          <Input
            onChangeText={text => this.handleLogin('full_name', text)}
            placeholder="Full name"
            selectionColor={GRAY}
            underlineColorAndroid={isFocused ? GRAY : LIGHT_GRAY}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={style.inputAuth}
            {...otherProps}
          />
          <Input
            onChangeText={text => this.handleLogin('email', text)}
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
            onChangeText={text => this.handleLogin('password', text)}
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
          <Button
            style={style.buttons}
            transparent
            light
            onPress={this.handleSubmit}>
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

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SignIn: data => dispatch(signIn(data)),
    SignUp: data => dispatch(signUp(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
