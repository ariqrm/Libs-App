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
import {View, Text, Image} from 'react-native';
export default class History extends Component {
  render() {
    return (
      <Container>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Image
            style={{height: 100, width: 150}}
            source={require('../../Assets/Icons/history.png')}
          />
          <Text style={{color: '#303031'}}>History Empty</Text>
        </View>
      </Container>
    );
  }
}
