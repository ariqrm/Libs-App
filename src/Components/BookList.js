import React, {Component} from 'React';
import {View, Text, StyleSheet, Image} from 'react-native';
import StarRating from 'react-native-star-rating';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    return (
      <View style={style.container}>
        <View>
          <Text style={style.textHeaderBook}>Popular Books</Text>
        </View>

        <View style={style.wrapper}>
          <View style={{width: '50%', padding: 15}}>
            <View style={style.bookCard}>
              <Image
                source={require('https://avatars1.githubusercontent.com/u/42673913?v=4')}
                style={style.cardImage}
              />
            </View>
            <Text style={style.textImageCard}>Dilan 1990</Text>
            <StarRating
              style={{width: '50%'}}
              disabled={true}
              emptyStar={require('..https://png.icons8.com/android/75/d9f00b/star.png')}
              fullStar={require('..https://png.icons8.com/android/75/d9f00b/star.png')}
              halfStar={require('..https://png.icons8.com/android/75/d9f00b/star.png')}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={this.state.starCount}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F3AC13'}
              starSize={13}
            />
          </View>

          <View style={{width: '50%', padding: 15}}>
            <View style={style.bookCard}>
              <Image
                source={require('https://avatars1.githubusercontent.com/u/42673913?v=4')}
                style={style.cardImage}
              />
            </View>
            <Text style={style.textImageCard}>Harry Potter</Text>
            <StarRating
              disabled={true}
              emptyStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              fullStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              halfStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={this.state.starCount}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F3AC13'}
              starSize={15}
              starStyle={style.star}
            />
          </View>

          <View style={{width: '50%', padding: 15}}>
            <View style={style.bookCard}>
              <Image
                source={require('https://avatars1.githubusercontent.com/u/42673913?v=4')}
                style={style.cardImage}
              />
            </View>
            <Text style={style.textImageCard}>Dilan 1990</Text>
            <StarRating
              disabled={true}
              emptyStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              fullStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              halfStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={this.state.starCount}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F3AC13'}
              starSize={15}
              starStyle={style.star}
            />
          </View>

          <View style={{width: '50%', padding: 15}}>
            <View style={style.bookCard}>
              <Image
                source={require('https://avatars1.githubusercontent.com/u/42673913?v=4')}
                style={style.cardImage}
              />
            </View>
            <Text style={style.textImageCard}>Harry Potter</Text>
            <StarRating
              disabled={true}
              emptyStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              fullStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              halfStar={require('https://png.icons8.com/android/75/d9f00b/star.png')}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={this.state.starCount}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F3AC13'}
              starSize={15}
              starStyle={style.star}
            />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textHeaderBook: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303031',
    marginLeft: 20,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  bookCard: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 5,
  },
  cardImage: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  textImageCard: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 10,
  },
  star: {
    marginRight: 2,
  },
});

export default BookList;
