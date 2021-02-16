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
  Input,
} from 'native-base';
import {View, Text, Image} from 'react-native';
import CardBook from './Card';
import {connect} from 'react-redux';
import {getFilterBook, getYear, getBookId} from '../../Publics/Actions/Books';
import {getGenre} from '../../Publics/Actions/Genres';
import {getBorrow, getReturn} from '../../Publics/Actions/Transactions';
import {closeModal, openModal} from '../../Publics/Actions/Modals';
import {userInfo, signUp, signIn} from '../../Publics/Actions/Users';
import AsyncStorage from '@react-native-community/async-storage';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getGenre: [],
      getYear: [],
      sidebar: false,
      getBook: [],
      title: '',
      page: 1,
      coloum: 'B.Title',
      status: 'available',
      checkPage: [],
      detail_id_books: '',
    };
  }
  getAPI = async (title, coloum, page, available) => {
    const Title = title || this.state.title;
    const Coloum = coloum || this.state.coloum;
    const Page = page || this.state.page;
    const Available = available || this.state.status;
    await this.props.Book(Title, Coloum, Page, Available);
    this.setState({
      checkPage: this.props.book.bookList,
      getBook: this.props.book,
      coloum: Coloum,
      page: Page,
      title: Title,
      status: Available,
    });
  };
  handleSubmit = (title, coloum, page, status) => {
    this.getAPI(title, coloum, page, status);
  };
  handleStatus = event => {
    const title = this.state.title;
    const coloum = this.state.coloum;
    const page = this.state.page > 1 ? 1 : this.state.page;
    const status = event.target.name;
    if (event.target.name === 'borrowed') {
      this.getAPI(title, coloum, page, status);
    } else if (event.target.name === 'available') {
      this.getAPI(title, coloum, page, status);
    }
  };
  handlePage = page => {
    const Title = this.state.title;
    const Coloum = this.state.coloum;
    const Page = page || this.state.page;
    const Status = this.state.status;
    if (page) {
      this.getAPI(Title, Coloum, Page, Status);
    }
  };
  handleViewDetail = id => {
    // console.log(this.props)
    // this.props.history.push(`/home/detail-book/${id}`);
  };
  id_books = id => {
    this.setState({
      detail_id_books: id,
    });
  };
  componentDidMount = () => {
    AsyncStorage.getItem('@storage_Key').then(res => {
      if (res !== null) {
        this.props.UserInfo(res);
        this.props.Genre(res);
        this.props.Year(res);
        this.props.Book(null, null, null, null, res);
        console.log(res);
        // value previously stored
      }
    });
  };
  render() {
    console.log(this.props);
    return (
      <View>
        <Header
          style={{
            backgroundColor: '#fff',
          }}>
          <Left>
            <Title style={{color: 'grey', fontWeight: 'bold'}}>BOOKZ </Title>
          </Left>
          <Body style={{justifyContent: 'center'}}>
            <Input />
          </Body>
        </Header>
        <CardBook {...this.props} />
        <View>
          <View>
            <Text>Loading</Text>
            <Image
              source={{
                uri:
                  'https://thumbs.gfycat.com/LoneDetailedFairybluebird-max-1mb.gif',
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    genre: state.genre,
    book: state.book,
    user: state.user,
    transaction: state.transaction,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    UserInfo: token => dispatch(userInfo(token)),
    Genre: () => dispatch(getGenre()),
    Year: () => dispatch(getYear()),
    GetReturn: id => dispatch(getReturn(id)),
    GetBorrow: id => dispatch(getBorrow(id)),
    Book: (mTitle, mColoum, mPage, mavailable) =>
      dispatch(getFilterBook(mTitle, mColoum, mPage, mavailable)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
