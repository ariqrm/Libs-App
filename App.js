import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import store from './src/Publics/Store';
import {Icon} from 'native-base';
import Login from './src/Screens/Auth/Login';
import Register from './src/Screens/Auth/Register';
import Home from './src/Screens/Home/Home';
import History from './src/Screens/Home/History';
import Profile from './src/Screens/Home/Profile';
import BookDetail from './src/Screens/Home/BookDetail';

const MainHome = createBottomTabNavigator({
  Home: {
    screen: Home,
    title: 'Home',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => {
        return <Icon name="archive" type="EvilIcons" size={30} color="#fff" />;
      },
      tabBarOptions: {
        activeTintColor: '#D4AF37',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        },
        showIcon: true,
      },
    },
  },
  History: {
    screen: History,
    title: 'History',
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: () => {
        return <Icon name="clock" type="EvilIcons" size={30} color="#fff" />;
      },
      tabBarOptions: {
        activeTintColor: '#D4AF37',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        },
        showIcon: true,
      },
    },
  },
  Profile: {
    screen: Profile,
    title: 'Profile',
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => {
        return <Icon name="user" type="EvilIcons" size={30} color="#fff" />;
      },
      tabBarOptions: {
        activeTintColor: '#D4AF37',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        },
        // showIcon: true,
      },
    },
  },
});

const HomeStack = createStackNavigator(
  {
    Home: MainHome,
    BookDetail: {
      screen: BookDetail,
      title: 'BookDetail',
    },
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      title: 'Login',
    },
    Register: {
      screen: Register,
      title: 'Register',
    },
  },
  {
    headerMode: 'none',
  },
);

const ContentApp = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
      HomeStack,
      // DetailBook,
    },
    // {
    //   initialRouteName: AuthStack,
    // },
  ),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContentApp />
      </Provider>
    );
  }
}
