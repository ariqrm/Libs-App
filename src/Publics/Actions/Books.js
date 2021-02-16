import Axios from 'axios';
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

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get(host + '/books', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVXNlciI6eyJpZCI6MTMsIkVtYWlsIjoibXVoYW1tYWRhcmlAZ21haWwuY29tIiwiVXNlcm5hbWUiOiJhcmkiLCJGdWxsX25hbWUiOiJxb2lyaW1hbiIsImFjY2VzcyI6ImFkbWluIiwiY3JlYXRlX2F0IjoiMjAxOS0wOC0xN1QwNjo1MzozNC4wMDBaIiwidXBkYXRlX2F0IjoiMjAxOS0wOC0yMFQyMzoxMDo0Mi4wMDBaIn0sImlhdCI6MTU2NzczOTcyOH0.8x9i1X8zRQxN8VGiflQbP96eMaqa0o2bIZH52R9pRKs',
      },
    }),
  };
};
export const getFilterBook = (title, coloumn, page, available, token) => {
  const Title = title || '';
  const Coloumn = coloumn || 'B.Title';
  const Page = page || 1;
  const Available = available || 'available';
  return {
    type: 'GET_BOOK_FILTER',
    payload: Axios.get(
      host +
        `/books?search=${Title}&available=${Available}&coloum=${Coloumn}&sort=id&by=DESC&limit=12&page=${Page}`,
      {
        headers: {
          Authorization: token,
        },
      },
    ),
  };
};
export const getBookId = (id, token) => {
  return {
    type: 'GET_BOOK_ID',
    payload: Axios.get(host + `/books/${id}`, {
      headers: {
        Authorization: token,
      },
    }),
  };
};
export const addBook = data => {
  return {
    type: 'ADD_BOOK',
    payload: Axios.post(host + '/books', data, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVXNlciI6eyJpZCI6MTMsIkVtYWlsIjoibXVoYW1tYWRhcmlAZ21haWwuY29tIiwiVXNlcm5hbWUiOiJhcmkiLCJGdWxsX25hbWUiOiJxb2lyaW1hbiIsImFjY2VzcyI6ImFkbWluIiwiY3JlYXRlX2F0IjoiMjAxOS0wOC0xN1QwNjo1MzozNC4wMDBaIiwidXBkYXRlX2F0IjoiMjAxOS0wOC0yMFQyMzoxMDo0Mi4wMDBaIn0sImlhdCI6MTU2NzczOTcyOH0.8x9i1X8zRQxN8VGiflQbP96eMaqa0o2bIZH52R9pRKs',
      },
    }),
  };
};
export const deleteBook = myId => {
  return {
    type: 'DELETE_BOOK',
    payload: Axios.delete(host + `/books/${myId}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVXNlciI6eyJpZCI6MTMsIkVtYWlsIjoibXVoYW1tYWRhcmlAZ21haWwuY29tIiwiVXNlcm5hbWUiOiJhcmkiLCJGdWxsX25hbWUiOiJxb2lyaW1hbiIsImFjY2VzcyI6ImFkbWluIiwiY3JlYXRlX2F0IjoiMjAxOS0wOC0xN1QwNjo1MzozNC4wMDBaIiwidXBkYXRlX2F0IjoiMjAxOS0wOC0yMFQyMzoxMDo0Mi4wMDBaIn0sImlhdCI6MTU2NzczOTcyOH0.8x9i1X8zRQxN8VGiflQbP96eMaqa0o2bIZH52R9pRKs',
      },
    }),
  };
};
export const updateBook = (myId, data) => {
  return {
    type: 'UPDATE_BOOK',
    payload: Axios.patch(host + `/books/${myId}`, data, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVXNlciI6eyJpZCI6MTMsIkVtYWlsIjoibXVoYW1tYWRhcmlAZ21haWwuY29tIiwiVXNlcm5hbWUiOiJhcmkiLCJGdWxsX25hbWUiOiJxb2lyaW1hbiIsImFjY2VzcyI6ImFkbWluIiwiY3JlYXRlX2F0IjoiMjAxOS0wOC0xN1QwNjo1MzozNC4wMDBaIiwidXBkYXRlX2F0IjoiMjAxOS0wOC0yMFQyMzoxMDo0Mi4wMDBaIn0sImlhdCI6MTU2NzczOTcyOH0.8x9i1X8zRQxN8VGiflQbP96eMaqa0o2bIZH52R9pRKs',
      },
    }),
  };
};
export const transaction = (query, data, token) => {
  const borrow = query.includes('borrow');
  console.log(data);
  if (borrow) {
    return {
      type: 'TRANSACTION_BOOK',
      payload: Axios.post(query, data, {
        headers: {
          Authorization: token,
        },
      }),
    };
  } else {
    return {
      type: 'TRANSACTION_BOOK',
      payload: Axios.patch(query, data, {
        headers: {
          Authorization: token,
        },
      }),
    };
  }
};
export const getYear = () => {
  return {
    type: 'GET_YEAR',
    payload: Axios.get(host + '/books/year'),
  };
};
