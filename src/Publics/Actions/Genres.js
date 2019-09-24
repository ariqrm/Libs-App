import Axios from 'axios';
const host = 'http://192.168.100.72:3010';
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

export const getGenre = () => {
  return {
    type: 'GET_GENRE',
    payload: Axios.get(host + '/genre', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVXNlciI6eyJpZCI6MTMsIkVtYWlsIjoibXVoYW1tYWRhcmlAZ21haWwuY29tIiwiVXNlcm5hbWUiOiJhcmkiLCJGdWxsX25hbWUiOiJxb2lyaW1hbiIsImFjY2VzcyI6ImFkbWluIiwiY3JlYXRlX2F0IjoiMjAxOS0wOC0xN1QwNjo1MzozNC4wMDBaIiwidXBkYXRlX2F0IjoiMjAxOS0wOC0yMFQyMzoxMDo0Mi4wMDBaIn0sImlhdCI6MTU2NzczOTcyOH0.8x9i1X8zRQxN8VGiflQbP96eMaqa0o2bIZH52R9pRKs',
      },
    }),
  };
};
