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
export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{justifyContent: 'center'}}>
            <Title>Profile</Title>
          </Body>
        </Header>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '30%',
            backgroundColor: '#5f27cd',
            position: 'relative',
          }}>
          <View
            style={{
              position: 'absolute',
              width: 150,
              height: 150,
              left: '30%',
              bottom: -70,
              backgroundColor: 'tomato',
              borderColor: '#222f3e',
              borderWidth: 5,
              borderRadius: 90,
            }}>
            <Image
              source={{
                uri: 'https://www.absoluteanime.com/hunter_x_hunter/leorio.jpg',
              }}
              style={{width: '100%', height: '100%', borderRadius: 90}}
            />
          </View>
        </View>
      </Container>
    );
  }
}
