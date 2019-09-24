import React, {Component, Fragment} from 'react';
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
import {View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native';
import {connect} from 'react-redux';
import {userInfo} from '../../Publics/Actions/Users';
import {getBookId, transaction} from '../../Publics/Actions/Books';
import AsyncStorage from '@react-native-community/async-storage';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ResponseModal: false,
      userName: '',
      formDataTransaction: {
        id_users: this.props.user.userInfo.id,
        id_book: this.props.navigation.state.params.BookId,
      },
      formDetail: {
        date_released: '2014-06-30T17:00:00.000Z',
        description:
          'A LIFE IN MONOTONE↵Kosei Arima was a piano prodigy until his cruel taskmaster of a mother died suddenly, changing his life forever. Driven by his pain to abandon piano, Kosei now lives in a monotonous, colorless world. Having resigned himself to a bland life, he is surprised when he meets Kaori Miyazono, a violinist with an unorthodox style. Can she bring Kosei back to music, and back to life?',
        genre: ' Romance',
        id: 1,
        image:
          'https://thumbs.gfycat.com/ConventionalOblongFairybluebird-small.gif',
        status: '',
        title: 'Your Lie in April 1',
      },
    };
  }
  handleSubmit = () => {
    const status =
      this.props.book.bookDetail[0].status || this.state.formDetail.status;
    Alert.alert(
      'Confirm',
      'Are you sure to rent book ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.handleTransactionToApi()},
      ],
      {cancelable: false},
    );
  };
  handleTransactionToApi = () => {
    let formData = this.state.formDataTransaction;
    const status =
      this.props.book.bookDetail[0].status || this.state.formDetail.status;
    const host = process.env.REACT_APP_HOST_API || 'http://192.168.6.123:3010';
    const query =
      status === 'available'
        ? host + '/transaction/borrow/'
        : status === 'pending'
        ? host + '/transaction/accept/'
        : host + '/transaction/return/';
    AsyncStorage.getItem('@storage_Key').then(token => {
      if (token !== null) {
        console.log(token, 'data', formData);
        this.props
          .dispatch(transaction(query, formData, token))
          .then(res => {
            const data = res.action.payload.data;
            // if (data.succes === true) {
              // console.log(data);
              // this.setState({
              //   ResponseModal: true,
              //   data: data,
              // });
              Alert.alert(
                'success',
                data.message,
                [
                  {
                    text: 'OK',
                    onPress: () => this.props.navigation.navigate('Home'),
                  },
                ],
                {
                  cancelable: false,
                },
              );
              // this.props.navigation.navigate('Home');
            // } else if (data.message === 'cant get data in database') {
              // this.setState({
              //   ResponseModal: true,
              //   data: data,
              // });
              // this.props.navigation.navigate('Home');
            // }
          })
          .catch(err => {
            const data = {
              message: 'access denied ' + err,
            };
            this.setState({
              ResponseModal: true,
              data: data,
            });
          });
      }
    });
  };
  componentDidMount = async () => {
    const data = await this.props.book.bookDetail;
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      const BookId = this.props.navigation.state.params.BookId;
      this.props.dispatch(userInfo(value));
      this.props.dispatch(getBookId(BookId, value));
      if (data !== null) {
        this.setState({
          data: data,
        });
      }
    }
  };
  // async removeItemValue() {
  //   try {
  //     await AsyncStorage.removeItem('@storage_Key');
  //     return true;
  //   } catch (exception) {
  //     return false;
  //   }
  // }
  render() {
    const DetailBook = this.props.book.bookDetail[0] || this.state.formDetail;
    const {user, genre} = this.props;
    console.log('props', this.state.data);
    console.log('props id', this.props.navigation.state.params.BookId);
    console.log(this.state.formDataTransaction, 'this');
    return (
      <ScrollView>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 270,
              backgroundColor: '#fff',
              position: 'relative',
            }}>
            <Image
              source={{
                uri: DetailBook.image,
              }}
              style={{
                width: '100%',
                height: '100%',
                // borderRadius: 90,
              }}
            />
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              transparent
              style={{
                position: 'absolute',
                // padding: 5,
                left: 5,
                top: 15,
                color: '#fff',
                backgroundColor: '#757575bf',
                borderColor: '#757575bf',
                borderWidth: 0.5,
                borderRadius: 100,
              }}>
              <Icon style={{color: '#fff'}} name="arrow-back" />
            </Button>
            <View
              style={{
                position: 'absolute',
                width: 190,
                // height: 150,
                padding: 5,
                left: 10,
                bottom: 5,
                color: '#fff',
                backgroundColor: '#757575ba',
                borderColor: '#757575ba',
                borderWidth: 0.5,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: 'bold',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                }}>
                {' '}
                {DetailBook.title.substr(0, 19)}{' '}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                }}>
                {' '}
                Genre : {DetailBook.genre}{' '}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                width: 120,
                height: 150,
                right: '10%',
                bottom: -30,
                // backgroundColor: '#757575',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
              }}>
              <Image
                source={{
                  uri: DetailBook.image,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                }}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                marginBottom: 80,
                padding: 15,
              }}>
              <View>
                <Text />
                <Text>{new Date(DetailBook.date_released).toDateString()}</Text>
                <Text />
                <Text> {DetailBook.description} </Text>
                <Text />
              </View>
              <Button
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  width: 164,
                  height: 39,
                  left: '28%',
                  bottom: '-17%',
                  backgroundColor: '#F4CF5D',
                  borderRadius: 20,
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                }}
                light
                onPress={this.handleSubmit}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: '#fff',
                  }}>
                  {' '}
                  Rent{' '}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   buttons: {
//     marginTop: 10,
//     marginLeft: 10,
//     maxWidth: 80,
//     // textAlign: 'center',
//   },
//   buttonsText: {
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });
const mapStateToProps = state => {
  return {
    genre: state.genre,
    book: state.book,
    user: state.user,
  };
};
export default connect(mapStateToProps)(BookDetail);
