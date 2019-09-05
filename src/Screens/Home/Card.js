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

export default class CardBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Lorem ipsum dolor',
          time: '1 days a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 1,
          image: 'https://lorempixel.com/400/200/nature/6/',
        },
        {
          id: 2,
          title: 'Sit amet, consectetuer',
          time: '2 minutes a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 2,
          image: 'https://lorempixel.com/400/200/nature/5/',
        },
        {
          id: 3,
          title: 'Dipiscing elit. Aenean ',
          time: '3 hour a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 3,
          image: 'https://lorempixel.com/400/200/nature/4/',
        },
        {
          id: 4,
          title: 'Commodo ligula eget dolor.',
          time: '4 months a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 1,
          image: 'https://lorempixel.com/400/200/nature/6/',
        },
        {
          id: 5,
          title: 'Aenean massa. Cum sociis',
          time: '5 weeks a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 1,
          image: 'https://lorempixel.com/400/200/sports/1/',
        },
        {
          id: 6,
          title: 'Natoque penatibus et magnis',
          time: '6 year a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 3,
          image: 'https://lorempixel.com/400/200/nature/8/',
        },
        {
          id: 7,
          title: 'Dis parturient montes, nascetur',
          time: '7 minutes a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 1,
          image: 'https://lorempixel.com/400/200/nature/1/',
        },
        {
          id: 8,
          title: 'Ridiculus mus. Donec quam',
          time: '8 days a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 1,
          image: 'https://lorempixel.com/400/200/nature/3/',
        },
        {
          id: 9,
          title: 'Felis, ultricies nec, pellentesque',
          time: '9 minutes a go',
          description: 'lorem ipsum dolor amet bla bla bla',
          status: 2,
          image: 'https://lorempixel.com/400/200/nature/4/',
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView>
        <Carousel />
        <View style={styles.container}>
          <FlatList
            // horizontal={false}
            numColumns={2}
            // contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
            // style={styles.list}
            data={this.state.data}
            keyExtractor={item => {
              return item.id;
            }}
            // ItemSeparatorComponent={() => {
            //   return <View style={styles.separator} />;
            // }}
            renderItem={post => {
              const item = post.item;
              return (
                <View style={styles.cardList}>
                  {/* <TouchableOpacity> */}
                  <View style={styles.card}>
                    <TouchableOpacity style={styles.cardImage}>
                      <Image
                        style={styles.cardImage}
                        source={{uri: item.image}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={
                        item.status === 1
                          ? styles.status1
                          : item.status === 2
                          ? styles.status2
                          : item.status === 3
                          ? styles.status3
                          : styles.status
                      }>
                      {item.status === 1
                        ? 'Borrowed'
                        : item.status === 2
                        ? 'Available'
                        : item.status === 3
                        ? 'pending'
                        : 'undefined'}
                    </Text>
                    <View style={styles.cardContent}>
                      <View>
                        <Text style={styles.title}>
                          {item.title.substr(0, 10)}
                        </Text>
                        <Text style={styles.time}>{item.time}</Text>
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
                  {/* </TouchableOpacity> */}
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
    // backgroundColor: '#000',
    marginBottom: 20,
  },
  list: {
    // backgroundColor: '#000',
  },
  separator: {
    marginTop: 1,
    width: '100%',
    backgroundColor: '#00f',
    // justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  cardList: {
    padding: 5,
    width: '49%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: '#0ff',
    // backgroundColor: '#fff',
  },
  /******** card **************/
  card: {
    margin: 5,
    height: 250,
    width: '100%',
    // marginRight: 40,
    // marginLeft: 40,
    // marginTop: 10,
    // paddingTop: 20,
    paddingBottom: 20,
    // backgroundColor: '#68a0cf',
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
    // borderRadius: 2,
    // borderWidth: 1,
    // borderColor: '#DCDCDC',
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
    // paddingVertical: 17,
    // paddingHorizontal: 16,
    // borderTopLeftRadius: 1,
    // borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    // paddingVertical: 12.5,
    // paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    // height: '30%',
    width: null,
    backgroundColor: 'white',
    // position: 'absolute',
    zIndex: 100,
    // left: 0,
    // right: 0,
    // backgroundColor: 'transparent',
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
    // marginRight: 40,
    // marginLeft: 40,
    // marginTop: 10,
    // paddingTop: 20,
    // paddingBottom: 20,
    // backgroundColor: '#68a0cf',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: null,
    borderColor: '#fff',
    height: 190,
    width: null,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  Rating: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0,
  },
  /******** card components **************/
  title: {
    paddingLeft: 8,
    fontSize: 22,
    color: 'grey',
    marginTop: 10,
    fontWeight: 'bold',
  },
  time: {
    paddingLeft: 8,
    fontSize: 13,
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
