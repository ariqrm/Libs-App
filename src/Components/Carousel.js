import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
class Carousel extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row', paddingLeft: 20}}>
        <View style={styles.CarouselBox}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>Action</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={styles.Image}
              source={require('../Assets/Icons/icon.png')}
            />
          </View>
        </View>

        <View style={styles.CarouselBox}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>Fantasi</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={styles.Image}
              source={require('../Assets/Icons/icon.png')}
            />
          </View>
        </View>

        <View style={styles.CarouselBox}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>Romance</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={styles.Image}
              source={require('../Assets/Icons/icon.png')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Carousel;

const styles = StyleSheet.create({
  CarouselBox: {
    width: 240,
    height: 120,
    backgroundColor: getRandomColor(),
    marginRight: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  Title: {
    justifyContent: 'center',
  },
  TitleText: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#fff',
  },
  Image: {
    flex: 1,
    height: 100,
    width: 100,
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
