import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import Carousel from '../../Components/Carousel';
import {connect} from 'react-redux';

class CardBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    if (this.props.book.bookList) {
      this.setState({
        data: this.props.book.bookList,
      });
    }
  };

  render() {
    return (
      <ScrollView>
        <Carousel />
        <Text style={styles.title}>Popular Books</Text>
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={this.props.book.bookList}
            keyExtractor={item => {
              return item.id;
            }}
            Li
            renderItem={post => {
              const item = post.item;
              return (
                <View style={styles.cardList}>
                  <View style={styles.card}>
                    <TouchableOpacity
                      style={styles.cardImage}
                      onPress={() => {
                        this.props.navigation.navigate('BookDetail', {
                          BookId: item.id,
                        });
                      }}>
                      <Image
                        style={styles.cardImage}
                        source={{uri: item.image}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={
                        item.status === 'borrowed'
                          ? styles.status1
                          : item.status === 'available'
                          ? styles.status2
                          : item.status === 'pending'
                          ? styles.status3
                          : styles.status
                      }>
                      {item.status === 'borrowed'
                        ? 'Borrowed'
                        : item.status === 'available'
                        ? 'Available'
                        : item.status === 'pending'
                        ? 'pending'
                        : 'undefined'}
                    </Text>
                    <View style={styles.cardContent}>
                      <View>
                        <Text style={styles.title}>
                          {item.title.substr(0, 20)}
                        </Text>
                        <Text style={styles.time}>
                          {new Date(item.date_released).toDateString()}
                        </Text>
                        <View style={styles.Rating}>
                          <Image
                            style={styles.iconRating}
                            source={{
                              uri:
                                'https://png.icons8.com/android/15/d9f00b/filled-star.png',
                            }}
                          />
                          <Image
                            style={styles.iconRating}
                            source={{
                              uri:
                                'https://png.icons8.com/android/15/d9f00b/filled-star.png',
                            }}
                          />
                          <Image
                            style={styles.iconRating}
                            source={{
                              uri:
                                'https://png.icons8.com/android/15/d9f00b/filled-star.png',
                            }}
                          />
                          <Image
                            style={styles.iconRating}
                            source={{
                              uri:
                                'https://png.icons8.com/android/15/d9f00b/filled-star.png',
                            }}
                          />
                          <Image
                            style={styles.iconRating}
                            source={{
                              uri:
                                'https://png.icons8.com/android/15/d9f00b/star.png',
                            }}
                          />
                          <Text>4.0</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  list: {
    // backgroundColor: '#000',
  },
  separator: {
    marginTop: 1,
    width: '100%',
    backgroundColor: '#00f',
  },
  cardList: {
    padding: 5,
    width: '49%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  /******** card **************/
  card: {
    margin: 5,
    // height: 2000,
    width: '100%',
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    backgroundColor: '#fff',
  },
  status: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#d9f00b',
  },
  status1: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#d9f00b',
  },
  status2: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#40f00b',
  },
  status3: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#f01e0b',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: 1,
    width: null,
    backgroundColor: 'white',
    zIndex: 100,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0,
  },
  cardImage: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: null,
    borderColor: '#fff',
    height: 180,
    width: null,
  },
  Rating: {
    flexDirection: 'row',
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0,
  },
  /******** card components **************/
  title: {
    paddingLeft: 8,
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
    fontWeight: 'bold',
  },
  time: {
    paddingLeft: 8,
    fontSize: 10,
    color: 'grey',
    // marginTop: 5,
  },
  iconRating: {
    width: 15,
    height: 15,
  },
  icon: {
    padding: 8,
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    padding: 5,
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    padding: 5,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: '#ffffff',
    padding: 5,
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

const mapStateToProps = state => {
  return {
    genre: state.genre,
    book: state.book,
    user: state.user,
  };
};

export default connect(mapStateToProps)(CardBook);
