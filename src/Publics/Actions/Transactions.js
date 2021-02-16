import Axios from 'axios';
const host = 'http://192.168.43.248:3010';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVXNlciI6eyJpZCI6MTMsIkVtYWlsIjoibXVoYW1tYWRhcmlAZ21haWwuY29tIiwiVXNlcm5hbWUiOiJhcmkiLCJGdWxsX25hbWUiOiJxb2lyaW1hbiIsImFjY2VzcyI6ImFkbWluIiwiY3JlYXRlX2F0IjoiMjAxOS0wOC0xN1QwNjo1MzozNC4wMDBaIiwidXBkYXRlX2F0IjoiMjAxOS0wOC0yMFQyMzoxMDo0Mi4wMDBaIn0sImlhdCI6MTU2NzczOTcyOH0.8x9i1X8zRQxN8VGiflQbP96eMaqa0o2bIZH52R9pRKs';

export const getReturn = id => {
  return {
    type: 'GET_TRANSACTION_RETURN',
    payload: Axios.get(host + `/transaction/borrowed/${id}`, {
      headers: {
        Authorization: token,
      },
    }),
  };
};
export const getBorrow = id => {
  return {
    type: 'GET_TRANSACTION_BORROW',
    payload: Axios.get(host + `/transaction/returned/${id}`, {
      headers: {
        Authorization: token,
      },
    }),
  };
};
export const checkBorrowed = id => {
  // const data = { id_book: id }
  return {
    type: 'GET_BORROWED_DATA',
    payload: Axios.get(host + `/transaction/check/borrowed/${id}`, {
      headers: {
        Authorization: token,
      },
    }),
  };
};
