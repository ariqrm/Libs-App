import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
} from 'native-base';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {userInfo} from '../../Publics/Actions/Users';
import AsyncStorage from '@react-native-community/async-storage';
class Profile extends Component {
  componentDidMount = async () => {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      this.props.dispatch(userInfo(value));
      console.log(value);
      // value previously stored
    }
  };
  async removeItemValue() {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      return true;
    } catch (exception) {
      return false;
    }
  }
  render() {
    const {user, genre} = this.props;
    return (
      <Container>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '30%',
            backgroundColor: '#5f27cd',
            position: 'relative',
          }}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/13/d6/81/13d681b20058a2d6261432a1b69cd781.jpg',
            }}
            style={{width: '100%', height: '100%'}}
          />
          <View
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              width: 150,
              height: 150,
              right: '30%',
              bottom: -70,
              backgroundColor: 'tomato',
              borderColor: '#a8a8a8bb',
              borderWidth: 5,
              borderRadius: 90,
            }}>
            <Image
              source={{
                uri:
                  'https://wallpapertag.com/wallpaper/middle/4/f/5/252731-killua-wallpaper-2048x2048-for-phone.jpg',
              }}
              style={{width: '100%', height: '100%', borderRadius: 90}}
            />
            <Text> . </Text>
            <Text style={style.buttonsText}>Member Id</Text>
            <Text>
              {this.props.user.userInfo.access +
                ' ' +
                this.props.user.userInfo.id}
            </Text>
            <Text style={style.buttonsText}>Username</Text>
            <Text>{this.props.user.userName}</Text>
          </View>
        </View>
        <Button
          style={style.buttons}
          transparent
          light
          onPress={() => {
            AsyncStorage.removeItem('@storage_Key', (err, res) => {
              if (!err) {
                this.props.navigation.navigate('Login');
              }
              console.log(res);
            });
          }}>
          <Text style={style.buttonsText}>Logout</Text>
        </Button>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  buttons: {
    elevation: 500,
    marginTop: 10,
    marginLeft: 10,
    maxWidth: 80,
    // textAlign: 'center',
  },
  buttonsText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
const mapStateToProps = state => {
  return {
    genre: state.genre,
    book: state.book,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Profile);
