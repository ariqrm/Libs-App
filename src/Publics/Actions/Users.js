import Axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
const host = 'http://192.168.43.248:3010';
// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@storage_Key');
//     if (value !== null) {
//       // value previously stored
//     }
//   } catch (e) {
//     // error reading value
//   }
// };
// const token = getData();

export const signIn = data => {
  return {
    type: 'SIGN_IN',
    payload: Axios.post(host + '/user/signin', data),
  };
};
export const signUp = data => {
  return {
    type: 'SIGN_UP',
    payload: Axios.post(host + '/user/register', data),
  };
};
// export const handleDataAuth = () => {
//   if (token) {
//     const hosts = window.location.host;
//     window.location.replace(hosts + '/login');
//   }
// };
export const userInfo = token => {
  return {
    type: 'GET_DATA_USER',
    payload: Axios.get(host + '/user/jwt', {
      headers: {
        Authorization: token,
      },
    }),
  };
};
