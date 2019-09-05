import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CardBook from './Card';
export class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
        <CardBook />
        <View>
          <View>
            <Text>This is the home screen</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
